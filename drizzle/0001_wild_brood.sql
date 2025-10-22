CREATE TABLE `waitlist` (
	`id` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320) NOT NULL,
	`message` text,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `waitlist_id` PRIMARY KEY(`id`)
);
