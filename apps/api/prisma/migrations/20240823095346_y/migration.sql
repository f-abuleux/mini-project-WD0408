-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `referalnumber` VARCHAR(191) NULL,
    `referalcode` VARCHAR(191) NULL DEFAULT '',
    `point` INTEGER NOT NULL DEFAULT 0,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('user', 'eventorganizer') NOT NULL DEFAULT 'user',
    `phonenumber` VARCHAR(15) NULL,
    `isVerify` BOOLEAN NOT NULL DEFAULT false,
    `createdAd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_referalnumber_key`(`referalnumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Point` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `point` INTEGER NOT NULL DEFAULT 0,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Point_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantitiy` INTEGER NOT NULL DEFAULT 1,
    `price` INTEGER NOT NULL DEFAULT 0,
    `totaldiscount` INTEGER NOT NULL DEFAULT 0,
    `finalprice` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('pending', 'waitingtocomfirm', 'paid', 'declined') NOT NULL DEFAULT 'pending',
    `paymentlink` VARCHAR(191) NOT NULL,
    `proofpayment` VARCHAR(191) NOT NULL,
    `createdAd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAd` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

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
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `price` INTEGER NOT NULL DEFAULT 0,
    `date` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL DEFAULT '',
    `seat` INTEGER NOT NULL DEFAULT 0,
    `tickettype` ENUM('free', 'paid') NOT NULL,
    `image` VARCHAR(191) NULL,
    `eventOrganizerId` INTEGER NOT NULL,
    `category` ENUM('game', 'music', 'film') NOT NULL,

    UNIQUE INDEX `Event_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Promotion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `voucherdiscount` VARCHAR(191) NOT NULL,
    `startdate` DATETIME(3) NOT NULL,
    `enddate` DATETIME(3) NOT NULL,
    `quota` INTEGER NOT NULL,
    `percentage` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `Promotion_voucherdiscount_key`(`voucherdiscount`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EventOrganizer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NULL,
    `role` ENUM('user', 'eventorganizer') NOT NULL DEFAULT 'eventorganizer',
    `phonenumber` VARCHAR(15) NULL,
    `isVerify` BOOLEAN NOT NULL DEFAULT false,
    `createdAd` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `EventOrganizer_username_key`(`username`),
    UNIQUE INDEX `EventOrganizer_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Point` ADD CONSTRAINT `Point_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
