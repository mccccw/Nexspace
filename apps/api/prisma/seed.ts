import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const adminPasswordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD ?? "Admin1234!", 12);
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL ?? "admin@nexspace.app" },
    update: {},
    create: { email: process.env.ADMIN_EMAIL ?? "admin@nexspace.app", username: process.env.ADMIN_USERNAME ?? "admin", passwordHash: adminPasswordHash, role: "ADMIN", xp: 100 }
  });

  for (let i = 1; i <= 10; i++) {
    await prisma.user.upsert({
      where: { email: `user${i}@nexspace.app` },
      update: {},
      create: { email: `user${i}@nexspace.app`, username: `user${i}`, passwordHash: await bcrypt.hash("Test1234!", 12), xp: 100 }
    });
  }

  const spaces = ["gaming", "coding", "anime", "startups", "design"];
  for (const slug of spaces) {
    const space = await prisma.space.upsert({ where: { slug }, update: {}, create: { slug, name: slug[0].toUpperCase() + slug.slice(1), category: slug, tags: [slug], ownerId: admin.id, memberCount: 1 } });
    for (const channel of ["general", "announcements", "off-topic"]) {
      await prisma.chatChannel.create({ data: { name: channel, spaceId: space.id } }).catch(() => undefined);
    }
  }
  console.log("Seed completed");
}

main().finally(async () => prisma.$disconnect());
