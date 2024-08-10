-- AlterTable
ALTER TABLE `user` MODIFY `referalnumber` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `point` INTEGER NOT NULL DEFAULT 0,
    MODIFY `phonenumber` INTEGER NULL;
