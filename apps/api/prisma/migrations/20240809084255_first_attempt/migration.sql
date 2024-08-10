/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `referalnumber` VARCHAR(191) NOT NULL,
    `point` INTEGER NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `phonenumber` INTEGER NOT NULL,
    `isVerify` BOOLEAN NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantitiy` INTEGER NOT NULL,
    `createdAd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `totalprice` INTEGER NOT NULL,
    `totaldiscount` INTEGER NOT NULL,
    `finalprice` INTEGER NOT NULL,
    `status` ENUM('pending', 'waitingtocomfirm', 'paid', 'declined') NOT NULL,
    `proofpayment` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `Transaction_userId_key`(`userId`),
    UNIQUE INDEX `Transaction_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `review` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 0,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `Review_userId_key`(`userId`),
    UNIQUE INDEX `Review_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `seat` INTEGER NOT NULL,
    `tickettype` ENUM('free', 'paid') NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `eventOrganizerId` INTEGER NOT NULL,
    `category` ENUM('game', 'music', 'film') NOT NULL,

    UNIQUE INDEX `Event_eventOrganizerId_key`(`eventOrganizerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `startdate` DATETIME(3) NOT NULL,
    `enddate` DATETIME(3) NOT NULL,
    `quota` INTEGER NOT NULL,
    `percentage` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `Promotion_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventOrganizer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creator` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `isVerify` BOOLEAN NOT NULL,

    UNIQUE INDEX `EventOrganizer_creator_key`(`creator`),
    UNIQUE INDEX `EventOrganizer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Event` ADD CONSTRAINT `Event_eventOrganizerId_fkey` FOREIGN KEY (`eventOrganizerId`) REFERENCES `EventOrganizer`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Promotion` ADD CONSTRAINT `Promotion_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
