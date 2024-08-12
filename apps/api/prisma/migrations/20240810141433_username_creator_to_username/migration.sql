/*
  Warnings:

  - You are about to drop the column `usernameCreator` on the `eventorganizer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `EventOrganizer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `EventOrganizer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `EventOrganizer_usernameCreator_key` ON `eventorganizer`;

-- AlterTable
ALTER TABLE `eventorganizer` DROP COLUMN `usernameCreator`,
    ADD COLUMN `role` ENUM('user', 'eventorganizer') NOT NULL DEFAULT 'eventorganizer',
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `role` ENUM('user', 'eventorganizer') NOT NULL DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX `EventOrganizer_username_key` ON `EventOrganizer`(`username`);
