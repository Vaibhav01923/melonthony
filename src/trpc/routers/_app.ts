import { z } from "zod";
import axios from "axios";
import { baseProcedure, createTRPCRouter } from "../init";
import { prisma } from "@/lib/db";
import { equal } from "assert";
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
        filter: z.string().optional(), // score filter
      })
    )
    .query(async ({ input }) => {
      const { limit, cursor, search, filter } = input;
      const whereClause: any = {};

      if (search) {
        whereClause.OR = [
          { artist_clean: { contains: search, mode: "insensitive" } },
          { album_clean: { contains: search, mode: "insensitive" } },
          { genres: { hasSome: [search] } },
        ];
      }

      if (filter !== undefined) {
        if (filter === "NOT GOOD") {
          whereClause.score_text = { equals: "NOT GOOD" };
        } else if (filter === "OTHER") {
          whereClause.AND = [
            { score_num: null },
            { score_text: { not: "NOT GOOD" } },
          ];
        } else {
          const num = parseInt(filter);
          if (!isNaN(num)) {
            whereClause.score_num = { equals: num };
          }
        }
      }

      const items = await prisma.album.findMany({
        where: whereClause,
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        skip: cursor ? 1 : 0,
        orderBy: { id: "asc" },
      });

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
