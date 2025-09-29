import { z } from "zod";
import axios from "axios";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/lib/db";
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  fetchAlbums: baseProcedure
    .input(
      z.object({
        limit: z.number().default(10), // how many per page
        cursor: z.string().nullish(), // cursor for pagination
        search: z.string().optional(), // search term
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, search } = input;

      let items;
      if (search) {
        // Optimized: Filter in database
        items = await prisma.album.findMany({
          where: {
            OR: [
              { artist_clean: { contains: search, mode: "insensitive" } },
              { album_clean: { contains: search, mode: "insensitive" } },
              {
                genres: {
                  hasSome: [search], // Exact match for genres; for partial, we'd need raw SQL
                },
              },
            ],
          },
          take: limit + 1,
          cursor: cursor ? { id: cursor } : undefined,
          skip: cursor ? 1 : 0,
          orderBy: { id: "asc" },
        });
      } else {
        // Normal pagination
        items = await prisma.album.findMany({
          take: limit + 1, // fetch one extra to check if there’s more
          cursor: cursor ? { id: cursor } : undefined,
          skip: cursor ? 1 : 0,
          orderBy: { id: "asc" },
        });
      }

      let nextCursor: string | null = null;
      if (items.length > limit) {
        const nextItem = items.pop();
        nextCursor = nextItem?.id ?? null;
      }

      return {
        items,
        nextCursor,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
