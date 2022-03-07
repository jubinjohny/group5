-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2022 at 11:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopping`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartId` int(11) NOT NULL,
  `productId` int(40) NOT NULL,
  `cartItemQty` int(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `price` int(40) NOT NULL,
  `totalPrice` int(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cartId`, `productId`, `cartItemQty`, `email`, `price`, `totalPrice`) VALUES
(7, 1, 1, 'Guest', 1300, 1300),
(8, 2, 1, 'Guest', 1044, 1044),
(9, 4, 1, 'admin@g5shopping.com', 4850, 4850),
(10, 5, 1, 'admin@g5shopping.com', 3938, 3938),
(11, 3, 1, 'admin@g5shopping.com', 929, 929);

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `imageId` int(40) NOT NULL,
  `productId` int(40) NOT NULL,
  `imageUrl` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`imageId`, `productId`, `imageUrl`) VALUES
(1, 1, '/assets/iphone14_44.jpg'),
(2, 1, '/assets/iphone14_22.jpg'),
(3, 1, '/assets/iphone14_33.jpg'),
(4, 1, '/assets/iphone14_11.jpg'),
(5, 2, '/assets/image-product-1.jpg'),
(6, 2, '/assets/image-product-2.jpg'),
(7, 2, '/assets/image-product-3.jpg'),
(8, 2, '/assets/image-product-4.jpg'),
(9, 3, '/assets/iphone12_2.jpg'),
(10, 3, '/assets/iphone12_3.jpg'),
(11, 3, '/assets/iphone12_4.jpg'),
(12, 3, '/assets/iphone12_6.jpg'),
(13, 4, '/assets/macbook_1.jpg'),
(15, 4, '/assets/macbook_2.jpg'),
(16, 4, '/assets/macbook_3.jpg'),
(17, 4, '/assets/macbook_4.jpg'),
(18, 5, '/assets/macbook_m1_1.jpg'),
(19, 5, '/assets/macbook_m1_2.jpg'),
(20, 5, '/assets/macbook_m1_3.jpg'),
(21, 5, '/assets/macbook_m1_4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `email` varchar(500) NOT NULL,
  `orderId` int(50) NOT NULL,
  `orderTotal` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`email`, `orderId`, `orderTotal`) VALUES
('Guest', 6, 2344),
('admin@g5shopping.com', 7, 9717);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(40) NOT NULL,
  `productName` varchar(40) NOT NULL,
  `productPrice` int(40) NOT NULL,
  `productDescription` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `productName`, `productPrice`, `productDescription`) VALUES
(1, 'iPhone 14 (Blue, 512 GB)', 1300, '6.1 and 6.7-inch sizes, No notch, Pill-shaped camera cutout, No rear camera bump, A16 chip, Qualcomm'),
(2, 'iPhone 13 (Blue, 256 GB)', 1044, 'Apple\'s iPhone 13 features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip. The first design change users will notice is the smaller notch. After years of using the same-sized notch to house the Face ID components, Apple has finally reduced its size by 20%.'),
(3, 'iPhone 12 (Blue, 128 GB)', 929, '6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance Supports MagSafe accessories for easy attach and faster wireless charging iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more'),
(4, 'MacBook Pro (M2 Chip, 2022)', 4850, 'When you need the highest level of performance ever in a Mac notebook, there’s M2 Pro. It allows you to max out the performance of MacBook Pro with double the GPU core count and memory bandwidth of M2 Pro, and a more powerful media engine that can play up to 7 streams of 8K video. You can configure M2 Pro with up to 64GB of unified memory, enabling your MacBook Pro to work faster and handle massive files with ease.'),
(5, 'MacBook Pro (M1 Chip, 2021)', 3938, 'M1 Pro delivers game-changing performance with amazing battery life. It features up to 10 CPU cores and up to 16 GPU cores, as well as a 16-core Neural Engine and a powerful media engine that can play as many as 4 streams of 8K video. Delivering 200GB/s of memory bandwidth, M1 Pro can be configured with up to 32GB of unified memory to handle complex professional workflows.');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `reviewId` int(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `productId` int(40) NOT NULL,
  `rating` int(40) NOT NULL,
  `text` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`reviewId`, `email`, `productId`, `rating`, `text`) VALUES
(1, 'admin@g5shopping.com', 1, 4, 'Super'),
(2, 'admin@g5shopping.com', 1, 4, 'Kollaam Poli Saadanam'),
(3, 'admin@g5shopping.com', 1, 1, 'Kollilla'),
(4, 'admin@g5shopping.com', 1, 2, 'Appy Saadanam'),
(5, 'admin@g5shopping.com', 1, 3, 'Saarilla adjust cheyyam');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `name` varchar(40) NOT NULL,
  `userImage` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`, `name`, `userImage`) VALUES
('admin@g5shopping.com', 'admin', 'Admin', './assets/image-avatar-post-login.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`imageId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`reviewId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `reviewId` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
