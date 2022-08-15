/*
  Warnings:

  - You are about to drop the column `nameClass` on the `classes` table. All the data in the column will be lost.
  - You are about to drop the column `nameGroup` on the `groups` table. All the data in the column will be lost.
  - You are about to drop the column `nameSubclass` on the `subclasses` table. All the data in the column will be lost.
  - You are about to drop the column `nameTable` on the `tables` table. All the data in the column will be lost.
  - You are about to drop the column `nameType` on the `types` table. All the data in the column will be lost.
  - You are about to drop the column `nameUnit` on the `units` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,user_id]` on the table `classes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,user_id]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,user_id]` on the table `subclasses` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,user_id]` on the table `tables` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,user_id]` on the table `types` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,user_id]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `groups` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `subclasses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `units` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "classes_nameClass_user_id_key";

-- DropIndex
DROP INDEX "groups_nameGroup_user_id_key";

-- DropIndex
DROP INDEX "subclasses_nameSubclass_user_id_key";

-- DropIndex
DROP INDEX "tables_nameTable_user_id_key";

-- DropIndex
DROP INDEX "types_nameType_user_id_key";

-- DropIndex
DROP INDEX "units_nameUnit_user_id_key";

-- AlterTable
ALTER TABLE "classes" DROP COLUMN "nameClass",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "nameGroup",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "subclasses" DROP COLUMN "nameSubclass",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tables" DROP COLUMN "nameTable",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "types" DROP COLUMN "nameType",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "units" DROP COLUMN "nameUnit",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "classes_name_user_id_key" ON "classes"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "groups_name_user_id_key" ON "groups"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "subclasses_name_user_id_key" ON "subclasses"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "tables_name_user_id_key" ON "tables"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "types_name_user_id_key" ON "types"("name", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_user_id_key" ON "units"("name", "user_id");
