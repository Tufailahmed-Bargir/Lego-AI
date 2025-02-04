-- CreateTable
CREATE TABLE "History" (
    "id" TEXT NOT NULL,
    "legacy_language" TEXT NOT NULL,
    "legacy_code" TEXT NOT NULL,
    "modern_language" TEXT NOT NULL,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);
