/*
  Warnings:

  - You are about to drop the column `creator` on the `eventorganizer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usernameCreator]` on the table `EventOrganizer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usernameCreator` to the `EventOrganizer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `EventOrganizer_creator_key` ON `eventorganizer`;

-- AlterTable
ALTER TABLE `eventorganizer` DROP COLUMN `creator`,
    ADD COLUMN `createdAd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `usernameCreator` VARCHAR(191) NOT NULL,
    MODIFY `isVerify` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` MODIFY `phonenumber` VARCHAR(15) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `EventOrganizer_usernameCreator_key` ON `EventOrganizer`(`usernameCreator`);
