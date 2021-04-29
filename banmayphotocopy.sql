-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 27, 2021 at 12:22 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banmayphotocopy`
--

-- --------------------------------------------------------

--
-- Table structure for table `chitietdh`
--

DROP TABLE IF EXISTS `chitietdh`;
CREATE TABLE IF NOT EXISTS `chitietdh` (
  `ID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SoDHCT` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaSPCT` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  `GiaTien` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `SoDH` (`SoDHCT`),
  KEY `MaSPCT` (`MaSPCT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chitietdh`
--

INSERT INTO `chitietdh` (`ID`, `SoDHCT`, `MaSPCT`, `SoLuong`, `GiaTien`) VALUES
('00001', '01', 'MPHTB', 10, 10000),
('00002', '01', 'MPHTB', 10, 10000);

-- --------------------------------------------------------

--
-- Table structure for table `chitiethd`
--

DROP TABLE IF EXISTS `chitiethd`;
CREATE TABLE IF NOT EXISTS `chitiethd` (
  `MaSPCTHD` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SoHDCT` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SL` int(11) DEFAULT NULL,
  `DonGia` float DEFAULT NULL,
  PRIMARY KEY (`MaSPCTHD`),
  KEY `FK_CTHD_HD` (`SoHDCT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `chitiethd`
--

INSERT INTO `chitiethd` (`MaSPCTHD`, `SoHDCT`, `SL`, `DonGia`) VALUES
('MPHTB', '001', 1, 100000),
('MPHTC', '001', 1, 100000),
('MPHTD', '001', 1, 100000);

-- --------------------------------------------------------

--
-- Table structure for table `dondathang`
--

DROP TABLE IF EXISTS `dondathang`;
CREATE TABLE IF NOT EXISTS `dondathang` (
  `SoDH` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `NgayDH` date DEFAULT NULL,
  `TrangThaiDH` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NgayDuKienGiao` date DEFAULT NULL,
  `MaNVDH` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaKHDH` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`SoDH`),
  KEY `FK_DH_KH` (`MaKHDH`),
  KEY `FK_DH_NV` (`MaNVDH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `dondathang`
--

INSERT INTO `dondathang` (`SoDH`, `NgayDH`, `TrangThaiDH`, `NgayDuKienGiao`, `MaNVDH`, `MaKHDH`) VALUES
('01', '2000-10-10', 'HoÃ n ThÃ nh', '2000-10-10', 'NVA', 'KH44'),
('02', '2000-10-11', 'Äang Xá»­ LÃ½', '2000-10-11', 'NVC', 'KH44');

-- --------------------------------------------------------

--
-- Table structure for table `giohang`
--

DROP TABLE IF EXISTS `giohang`;
CREATE TABLE IF NOT EXISTS `giohang` (
  `MaSPGH` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `TenSPGH` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `HinhanhGH` text COLLATE utf8_unicode_ci NOT NULL,
  `GiaBanGH` int(11) NOT NULL,
  `SoluongGH` int(11) NOT NULL,
  `TongTien` int(11) NOT NULL,
  UNIQUE KEY `MaSPGH` (`MaSPGH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `giohang`
--

INSERT INTO `giohang` (`MaSPGH`, `TenSPGH`, `HinhanhGH`, `GiaBanGH`, `SoluongGH`, `TongTien`) VALUES
('MPHTB', 'MÃ¡y Photocopy B', 'image2.jpg', 6000000, 1, 6000000),
('MPHTC', 'MÃ¡y Photocopy C', 'image3.jpg', 7000000, 1, 7000000),
('MPHTD', 'MÃ¡y Photocopy D', 'image4.jpg', 7000000, 1, 7000000);

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
CREATE TABLE IF NOT EXISTS `hoadon` (
  `SoHD` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `NgayHD` date DEFAULT NULL,
  `MaNVHD` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaKHHD` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`SoHD`),
  KEY `FK_HD_NV` (`MaNVHD`),
  KEY `FK_HD_KH` (`MaKHHD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`SoHD`, `NgayHD`, `MaNVHD`, `MaKHHD`) VALUES
('001', '2020-10-10', 'NVC', 'KH44'),
('002', '2020-10-10', 'NVB', 'KH56');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `MaKH` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `TenKH` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Phone` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`MaKH`, `TenKH`, `Phone`, `Email`) VALUES
('KH012', 'Nguyá»…n VÄƒn Tiá»n', '0339728706', 'Vantien999969@gmail.com'),
('KH44', 'Nguyá»…n VÄƒn A', '0123456789', 'Nguyenvana@gmail.com'),
('KH56', 'Nguyá»…n VÄƒn N', '0123456788', 'NguyenvaNa@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
CREATE TABLE IF NOT EXISTS `nhanvien` (
  `MaNV` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `HotenNV` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GT` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NS` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaNV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`MaNV`, `HotenNV`, `GT`, `NS`) VALUES
('NVA', 'Nguyá»…n VÄƒn A', 'Nam', '2000'),
('NVB', 'Nguyá»…n VÄƒn B', 'Nam', '1999'),
('NVC', 'Nguyá»…n Thá»‹ C', 'Ná»¯ ', '1987');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE IF NOT EXISTS `sanpham` (
  `MaSP` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `TenSP` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaLoai` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hinhanhsp` text COLLATE utf8_unicode_ci,
  `Model` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MauSac` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `giabansp` int(11) DEFAULT NULL,
  `KhuyenMai` double DEFAULT NULL,
  PRIMARY KEY (`MaSP`),
  KEY `sanpham_ibfk_1` (`MaLoai`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`MaSP`, `TenSP`, `MaLoai`, `hinhanhsp`, `Model`, `MauSac`, `giabansp`, `KhuyenMai`) VALUES
('MPHTB', 'MÃ¡y Photocopy B', 'MCN', 'image2.jpg', '2014', 'Tráº¯ng', 6000000, 10),
('MPHTC', 'MÃ¡y Photocopy C', 'MVP', 'image3.jpg', '2016', 'Tráº¯ng', 7000000, 10),
('MPHTD', 'MÃ¡y Photocopy D', 'MVP', 'image4.jpg', '2016', 'Tráº¯ng Äen', 7000000, 10),
('MPHTQ', 'MÃ¡y Photocopy Q', 'MVP', 'image4.jpg', '2017', 'Tráº¯ng', 8000000, 15);

-- --------------------------------------------------------

--
-- Table structure for table `sanphamthuonghieu`
--

DROP TABLE IF EXISTS `sanphamthuonghieu`;
CREATE TABLE IF NOT EXISTS `sanphamthuonghieu` (
  `ChucNangChinh` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `MaThuongHieu` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MaSanPham` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `giaban` int(11) DEFAULT NULL,
  PRIMARY KEY (`ChucNangChinh`),
  KEY `FK_SPTH_SP` (`MaSanPham`),
  KEY `FK_SPTH_TH` (`MaThuongHieu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sanphamthuonghieu`
--

INSERT INTO `sanphamthuonghieu` (`ChucNangChinh`, `MaThuongHieu`, `MaSanPham`, `giaban`) VALUES
('Copy-Copy', 'THCN', 'MPHTD', 100000),
('Copy-In', 'THCN', 'MPHTC', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `theloai`
--

DROP TABLE IF EXISTS `theloai`;
CREATE TABLE IF NOT EXISTS `theloai` (
  `MaTL` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `TenTL` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaTL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `theloai`
--

INSERT INTO `theloai` (`MaTL`, `TenTL`) VALUES
('MCN', 'MÃ¡y Photocopy CÃ¡ NhÃ¢n'),
('MSR', 'MÃ¡y Photocopy SiÃªu Ráº»'),
('MVP', 'MÃ¡y Photocopy VÄƒn PhÃ²ng'),
('SPM', 'Sáº£n Pháº©m Má»›i'),
('SPTK', 'Sáº£n Pháº©m Tá»“n Kho');

-- --------------------------------------------------------

--
-- Table structure for table `thuonghieu`
--

DROP TABLE IF EXISTS `thuonghieu`;
CREATE TABLE IF NOT EXISTS `thuonghieu` (
  `MaTH` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `TenTH` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SDT` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaTH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `thuonghieu`
--

INSERT INTO `thuonghieu` (`MaTH`, `TenTH`, `DiaChi`, `SDT`, `Email`) VALUES
('THCN', 'Canon', NULL, NULL, NULL),
('THHP', 'HP', NULL, NULL, NULL),
('THS', 'Sharp', NULL, NULL, NULL),
('THSS', 'SamSung', NULL, NULL, NULL),
('THT', 'Toshiba', NULL, NULL, NULL),
('THX', 'Xerox', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Password` text COLLATE utf8_unicode_ci NOT NULL,
  `Avatar` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserName`, `Password`, `Avatar`) VALUES
('admin', 'c4ca4238a0b923820dcc509a6f75849b', '8f93782fcad25f06c0f554e757946fff.jpeg'),
('NguyenVanTien', 'c4ca4238a0b923820dcc509a6f75849b', 'ba3a78b71f12934737a77fe81d3e89bc.jpeg');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chitietdh`
--
ALTER TABLE `chitietdh`
  ADD CONSTRAINT `FK_CTDH_SP` FOREIGN KEY (`MaSPCT`) REFERENCES `sanpham` (`MaSP`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `chitiethd`
--
ALTER TABLE `chitiethd`
  ADD CONSTRAINT `FK_CTHD_HD` FOREIGN KEY (`SoHDCT`) REFERENCES `hoadon` (`SoHD`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_CTHD_SP` FOREIGN KEY (`MaSPCTHD`) REFERENCES `sanpham` (`MaSP`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `dondathang`
--
ALTER TABLE `dondathang`
  ADD CONSTRAINT `FK_DH_KH` FOREIGN KEY (`MaKHDH`) REFERENCES `khachhang` (`MaKH`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_DH_NV` FOREIGN KEY (`MaNVDH`) REFERENCES `nhanvien` (`MaNV`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `giohang`
--
ALTER TABLE `giohang`
  ADD CONSTRAINT `FK_GH_SP` FOREIGN KEY (`MaSPGH`) REFERENCES `sanpham` (`MaSP`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `FK_HD_KH` FOREIGN KEY (`MaKHHD`) REFERENCES `khachhang` (`MaKH`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_HD_NV` FOREIGN KEY (`MaNVHD`) REFERENCES `nhanvien` (`MaNV`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`MaLoai`) REFERENCES `theloai` (`MaTL`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sanphamthuonghieu`
--
ALTER TABLE `sanphamthuonghieu`
  ADD CONSTRAINT `FK_SPTH_SP` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`MaSP`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_SPTH_TH` FOREIGN KEY (`MaThuongHieu`) REFERENCES `thuonghieu` (`MaTH`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
