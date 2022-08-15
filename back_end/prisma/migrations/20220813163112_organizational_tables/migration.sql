/*
  Warnings:

  - You are about to drop the column `group_name` on the `groups` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nameGroup,user_id]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `class_id` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subclass_id` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `table_id` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_id` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_id` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `drawers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameGroup` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `groups` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "drawers" DROP CONSTRAINT "drawers_group_id_fkey";

-- DropIndex
DROP INDEX "groups_group_name_key";

-- AlterTable
ALTER TABLE "drawers" ADD COLUMN     "class_id" INTEGER NOT NULL,
ADD COLUMN     "code" INTEGER NOT NULL,
ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "manufacturer" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "subclass_id" INTEGER NOT NULL,
ADD COLUMN     "table_id" INTEGER NOT NULL,
ADD COLUMN     "type_id" INTEGER NOT NULL,
ADD COLUMN     "unit_id" INTEGER NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "group_name",
ADD COLUMN     "nameGroup" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "nameType" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "units" (
    "id" SERIAL NOT NULL,
    "nameUnit" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "units_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "nameClass" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subclasses" (
    "id" SERIAL NOT NULL,
    "nameSubclass" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "subclasses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tables" (
    "id" SERIAL NOT NULL,
    "nameTable" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "tables_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "types_nameType_user_id_key" ON "types"("nameType", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "units_nameUnit_user_id_key" ON "units"("nameUnit", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "classes_nameClass_user_id_key" ON "classes"("nameClass", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subclasses_nameSubclass_user_id_key" ON "subclasses"("nameSubclass", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tables_nameTable_user_id_key" ON "tables"("nameTable", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "groups_nameGroup_user_id_key" ON "groups"("nameGroup", "user_id");
