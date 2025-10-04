import { prisma } from "@/lib/db";

async function main() {
  console.log("Fetching albums...");
  const albums = await prisma.album.findMany();
  console.log(`Found ${albums.length} albums`);

  let processed = 0;
  for (const album of albums) {
    const val = album.score;

    if (typeof val === "number") {
      await prisma.album.update({
        where: { id: album.id },
        data: { score_num: val },
      });
    } else if (typeof val === "string") {
      await prisma.album.update({
        where: { id: album.id },
        data: { score_text: val },
      });
    }

    processed++;
    if (processed % 100 === 0) {
      console.log(`Processed ${processed} albums`);
    }
  }

  console.log("✅ Migration complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
