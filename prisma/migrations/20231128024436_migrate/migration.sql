-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `History` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `campaign_id` INTEGER NOT NULL,
    `food` VARCHAR(50) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `expiredDate` DATETIME(3) NOT NULL,
    `pickupLocation` VARCHAR(60) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`, `user_id`, `campaign_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `campaign` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `img` VARCHAR(300) NOT NULL,
    `reached` INTEGER NOT NULL DEFAULT 0,
    `target` INTEGER NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `startFromIdr` DECIMAL(65, 30) NOT NULL,
    `location` VARCHAR(60) NOT NULL,
    `rules` VARCHAR(60) NOT NULL,
    `longitude` DECIMAL(65, 30) NOT NULL,
    `latitude` DECIMAL(65, 30) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `specificFood` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `History` ADD CONSTRAINT `History_campaign_id_fkey` FOREIGN KEY (`campaign_id`) REFERENCES `campaign`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
