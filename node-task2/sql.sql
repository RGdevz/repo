-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2014 at 10:29 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: library
--
CREATE DATABASE library DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE library;

-- --------------------------------------------------------

--
-- Table structure for table books
--

CREATE TABLE IF NOT EXISTS books (
  Book_ID int(11) NOT NULL,
  Book_Name text NOT NULL,
  Year int(11) NOT NULL,
  Max_Time int(11) NOT NULL COMMENT 'days',
  Faculty text NOT NULL,
  Pages int(11) NOT NULL,
  PRIMARY KEY (Book_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table books
--

INSERT INTO books (Book_ID, Book_Name, Year, Max_Time, Faculty, Pages) VALUES
(1111, 'Database System', 1998, 7, 'CS', 348),
(1112, 'Database Systems', 1998, 14, 'CS', 348),
(1113, 'Database Systems', 2001, 7, 'CS', 424),
(2222, 'Database And Knowledge', 1998, 1, 'CS', 390),
(2223, 'Database And Knowledge', 1998, 7, 'EE', 390),
(3333, 'Electronic Circuits', 1998, 21, 'EE', 180),
(4444, 'Genes 7', 1985, 7, 'MED', 580),
(5555, 'Anatomy', 1988, 7, 'MED', 450);

-- --------------------------------------------------------

--
-- Table structure for table borrowed
--

CREATE TABLE IF NOT EXISTS borrowed (
  Book_ID int(11) NOT NULL,
  Cust_ID int(11) NOT NULL,
  From_Date date NOT NULL,
  To_Date date DEFAULT NULL,
  PRIMARY KEY (Book_ID,Cust_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table borrowed
--

INSERT INTO borrowed (Book_ID, Cust_ID, From_Date, To_Date) VALUES
(5555, 56789, '2014-10-13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table customers
--

CREATE TABLE IF NOT EXISTS customers (
  Cust_ID int(11) NOT NULL,
  Cust_Name text NOT NULL,
  Faculty text NOT NULL,
  PRIMARY KEY (Cust_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table customers
--

INSERT INTO customers (Cust_ID, Cust_Name, Faculty) VALUES
(12345, 'Moshe Cohen', 'CS'),
(23456, 'Avi Barak', 'EE'),
(34567, 'Avi Barak', 'MED'),
(45678, 'Lior Edri', 'EE'),
(56789, 'Moshe Cohen', 'EE'),
(67890, 'Moshe Cohen', 'CS');

-- --------------------------------------------------------

--
-- Table structure for table ordered
--

CREATE TABLE IF NOT EXISTS ordered (
  Cust_ID int(11) NOT NULL,
  Book_ID int(11) NOT NULL,
  Order_Date date NOT NULL,
  PRIMARY KEY (Cust_ID,Book_ID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table ordered
--

INSERT INTO ordered (Cust_ID, Book_ID, Order_Date) VALUES
(12345, 1111, '2014-10-14'),
(12345, 1113, '2014-10-30'),
(45678, 1112, '2014-10-24'),
(45678, 2222, '2014-10-12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;