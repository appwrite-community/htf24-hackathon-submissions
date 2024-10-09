-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2018 at 11:37 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ticketing_system`
--
CREATE DATABASE IF NOT EXISTS `ticketing_system` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ticketing_system`;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(100) NOT NULL,
  `destination_id` int(50) NOT NULL,
  `booking_date` varchar(30) NOT NULL,
  `journey_date` varchar(30) NOT NULL,
  `train_id` int(30) NOT NULL,
  `seat_numbers` varchar(150) NOT NULL,
  `passenger_id` int(50) NOT NULL,
  `number_of_seat` int(5) NOT NULL,
  `payment_status` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL,
  `note` varchar(220) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `destination_id`, `booking_date`, `journey_date`, `train_id`, `seat_numbers`, `passenger_id`, `number_of_seat`, `payment_status`, `status`, `note`) VALUES
(1, 11, '06-10-2018', '06-10-2018', 7, '1,2', 12, 2, 'pending', 'success', 'note'),
(4, 11, '06-10-2018', '06-10-2018', 7, '3,4', 12, 2, 'pending', 'success', 'note'),
(5, 16, '06-10-2018', '06-10-2018', 2, '41,42,43', 12, 3, 'pending', 'success', 'note'),
(6, 13, '06-10-2018', '06-10-2018', 7, '57,58,59,60', 12, 4, 'pending', 'success', 'note'),
(7, 15, '06-10-2018', '06-10-2018', 2, '21,22,23,24', 12, 4, 'pending', 'success', 'note'),
(8, 14, '06-10-2018', '06-10-2018', 2, '1', 12, 1, 'pending', 'success', 'note'),
(9, 14, '06-10-2018', '06-10-2018', 2, '2', 12, 1, 'pending', 'success', 'note'),
(10, 14, '06-10-2018', '06-10-2018', 2, '2', 12, 1, 'pending', 'success', 'note'),
(11, 14, '06-10-2018', '06-10-2018', 2, '2', 12, 1, 'pending', 'success', 'note'),
(12, 14, '06-10-2018', '06-10-2018', 2, '2', 12, 1, 'pending', 'success', 'note'),
(13, 12, '06-10-2018', '06-10-2018', 7, '6,7', 12, 2, 'pending', 'success', 'note'),
(14, 12, '06-10-2018', '06-10-2018', 7, '8,9,10', 12, 3, 'pending', 'success', 'note'),
(15, 12, '06-10-2018', '06-10-2018', 7, '8,9,10', 12, 3, 'pending', 'success', 'note'),
(16, 12, '06-10-2018', '06-10-2018', 7, '8,9,10', 12, 3, 'pending', 'success', 'note'),
(17, 16, '08-10-2018', '08-10-2018', 2, '41,42,43', 12, 3, 'pending', 'success', 'note'),
(18, 16, '10-10-2018', '10-10-2018', 2, '41,42,43', 12, 3, 'pending', 'success', 'note'),
(19, 15, '11-10-2018', '11-10-2018', 2, '21,22', 12, 2, 'pending', 'success', 'note'),
(20, 14, '11-10-2018', '11-10-2018', 2, '1', 12, 1, 'pending', 'success', 'note'),
(21, 27, '16-10-2018', '16-10-2018', 10, '1,2', 12, 2, 'pending', 'success', 'note'),
(22, 27, '11-10-2018', '11-10-2018', 10, '1', 12, 1, 'pending', 'success', 'note'),
(23, 27, '11-10-2018', '11-10-2018', 10, '2', 12, 1, 'pending', 'success', 'note'),
(24, 30, '11-10-2018', '11-10-2018', 8, '9', 12, 1, 'pending', 'success', 'note');

-- --------------------------------------------------------

--
-- Table structure for table `destinations`
--

CREATE TABLE `destinations` (
  `id` int(100) NOT NULL,
  `station_from` int(20) NOT NULL,
  `station_to` int(20) NOT NULL,
  `train_id` int(20) NOT NULL,
  `time` varchar(30) NOT NULL,
  `status` varchar(20) NOT NULL,
  `fare` varchar(5) NOT NULL,
  `last_activity` datetime NOT NULL,
  `last_modify_by` int(30) NOT NULL,
  `total_seat` int(5) NOT NULL,
  `seat_range` varchar(10) NOT NULL,
  `type` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `destinations`
--

INSERT INTO `destinations` (`id`, `station_from`, `station_to`, `train_id`, `time`, `status`, `fare`, `last_activity`, `last_modify_by`, `total_seat`, `seat_range`, `type`) VALUES
(11, 1, 2, 7, '40:30Am', 'active', '40', '2018-09-05 00:00:00', 0, 5, '1-5', 'up'),
(12, 1, 3, 7, '40:30Am', 'active', '240', '2018-09-05 00:00:00', 0, 50, '6-56', 'up'),
(13, 1, 4, 7, '40:30Am', 'active', '280', '2018-09-05 00:00:00', 0, 5, '57-61', 'up'),
(14, 1, 2, 2, '1:20AM', 'active', '40', '2018-09-05 00:00:00', 0, 20, '1-20', 'up'),
(15, 1, 3, 2, '1:20AM', 'active', '240', '2018-09-05 00:00:00', 0, 20, '21-40', 'up'),
(16, 1, 4, 2, '1:20AM', 'active', '280', '2018-09-05 00:00:00', 0, 10, '41-50', 'up'),
(17, 4, 1, 7, '2:50 AM', 'active', '240', '2018-09-05 00:00:00', 0, 20, '1-20', 'up'),
(18, 4, 3, 7, '2:50 AM', 'active', '40', '2018-09-05 00:00:00', 0, 50, '21-50', 'up'),
(23, 6, 4, 9, '10:5AM', 'active', '480', '2018-09-05 00:00:00', 0, 30, '21-50', 'up'),
(25, 6, 2, 9, '10:5AM', 'active', '350', '2018-09-05 00:00:00', 0, 20, '21-50', 'up'),
(27, 7, 1, 10, '10:5AM', 'active', '480', '2018-09-05 00:00:00', 0, 3, '1-3', 'up'),
(28, 7, 3, 10, '10:5AM', 'active', '350', '2018-09-05 00:00:00', 0, 4, '4-8', 'up'),
(29, 7, 4, 10, '10:5AM', 'active', '900', '2018-09-05 00:00:00', 0, 2, '9-10', 'up'),
(30, 7, 1, 8, '6AM', 'active', '480', '2018-09-05 00:00:00', 0, 2, '9-10', 'up');

-- --------------------------------------------------------

--
-- Table structure for table `stations`
--

CREATE TABLE `stations` (
  `id` int(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(70) NOT NULL,
  `contact` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stations`
--

INSERT INTO `stations` (`id`, `name`, `address`, `contact`) VALUES
(1, 'Dhaka', 'Dhaka, Comlapur', '01733435951'),
(2, 'Dhaka Bimanbondor', 'Dhaka binmanbondor', '0202'),
(3, 'Jamalpur', 'Jamalpur railstation', '01733435957'),
(4, 'Islampur Bazar', 'Islampur , Jamalpur, Dhaka, Bangladesh', '01733'),
(6, 'Mymensingh', 'Islampur , Jamalpur, Dhaka, Bangladesh', '01733435951'),
(7, 'Mymensingh 2', 'Islampur , Jamalpur, Dhaka, Bangladesh', '01733435951');

-- --------------------------------------------------------

--
-- Table structure for table `trains`
--

CREATE TABLE `trains` (
  `id` int(10) NOT NULL,
  `code` varchar(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `total_seat` int(5) NOT NULL,
  `type` varchar(20) NOT NULL DEFAULT 'intercity'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trains`
--

INSERT INTO `trains` (`id`, `code`, `name`, `total_seat`, `type`) VALUES
(2, 'B207', 'Bromoputra', 560, 'intercity'),
(3, 'j152', 'Jomuna', 650, 'intercity'),
(4, 'SNB-59', 'Sunar Bangla', 700, 'intercity'),
(8, '105', 'Bus 1', 10, 'F-Class'),
(9, '106', 'Demo Bus name', 42, 'S-Chair'),
(10, '108', 'Demo Bus name 2', 10, 'F-Class');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `address` varchar(200) NOT NULL,
  `password` varchar(150) NOT NULL,
  `rule` varchar(10) NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_activity` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `address`, `password`, `rule`, `reg_date`, `last_activity`) VALUES
(6, 'Md Rukon Shekh', 'rukon@gmail.com', '253', 'dfsdsf', '123', 'admin', '2018-09-17 15:53:29', '2018-09-17 15:53:29'),
(7, 'Md Rukon', 'rukdon@gmail.com', '0184272596763', '', '', 'passenger', '2018-09-17 16:07:40', '2018-09-17 16:07:40'),
(8, 'Md Rukon', 'rukon@gmai.co', '0184279676399', '', '', 'passenger', '2018-09-17 16:09:44', '2018-09-17 16:09:44'),
(9, 'Md Rukon Shekh', 'rukon36@gmail.com', '02175', 'Dhaka,Bangladesh', '123', 'passenger', '2018-09-17 16:11:32', '2018-09-17 16:11:32'),
(10, 'Md Rukon Shekh', 'rukon.infdo@gmail.com', '8985', 'teste', '123', 'passenger', '2018-09-17 16:33:49', '2018-09-17 16:33:49'),
(11, 'Md Rukon', 'rukons@gmail.com', '02158', 'ad', '123', 'passenger', '2018-09-17 16:35:22', '2018-09-17 16:35:22'),
(12, 'Asad', 'asad@gmail.com', '01652', 'Asad Address', '123', 'passenger', '2018-09-17 16:38:28', '2018-09-17 16:38:28'),
(13, 'boss', 'mushfiqur.office@gmail.com', '01756179081', 'dhaka', '12345', 'passenger', '2018-10-05 19:26:29', '2018-10-05 19:26:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stations`
--
ALTER TABLE `stations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trains`
--
ALTER TABLE `trains`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `destinations`
--
ALTER TABLE `destinations`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `stations`
--
ALTER TABLE `stations`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `trains`
--
ALTER TABLE `trains`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
