-- CreateTable
CREATE TABLE "resources" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "emotionalCategory" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
