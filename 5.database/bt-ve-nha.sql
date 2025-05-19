CREATE DATABASE `QL_Quan_Karaoke`;

USE ql_quan_karaoke;
CREATE TABLE `Phong`(
	MaPhong VARCHAR(10) PRIMARY KEY,
	LoaiPhong VARCHAR(10),
	SoKhachToiDa INT,
	GiaPhong FLOAT,
	MoTa text
)

USE ql_quan_karaoke;
CREATE TABLE `Khach_Hang`(
	MaKH VARCHAR(10) PRIMARY KEY,
	TenKH VARCHAR(30),
	DiaChi VARCHAR(100),
	SoDT VARCHAR(11)
)

USE ql_quan_karaoke;
CREATE TABLE `Dat_phong`(
	MaDatPhong VARCHAR(10) PRIMARY KEY,
	MaPhong VARCHAR(10),
	MaKH VARCHAR(10),
	NgayDat DATE,
	GioBatDau TIME,
	GioKetThuc TIME,
	TienDatCoc FLOAT,
	GhiChu TEXT,
	TrangThai VARCHAR(10),
	CONSTRAINT MaPhong_foreign FOREIGN KEY (MaPhong) REFERENCES Phong(MaPhong),
	CONSTRAINT MaKH_foreign FOREIGN KEY (MaKH) REFERENCES Khach_Hang(MaKH)
)

USE ql_quan_karaoke;
CREATE TABLE `Dich_Vu_Di_Kem`(
	MaDV VARCHAR(10) PRIMARY KEY,
	TenDV VARCHAR(30),
	DonViTinh VARCHAR(10),
	DonGia FLOAT
)

USE ql_quan_karaoke;
CREATE TABLE `Chi_Tiet_Su_Dung_Dich_Vu`(
	MaDatPhong VARCHAR(10),
	MaDV VARCHAR(10),
	SoLuong INT,
	CONSTRAINT MaDatPhong_foreign FOREIGN KEY (MaDatPhong) REFERENCES Dat_Phong(MaDatPhong),
	CONSTRAINT MaDV_foreign FOREIGN KEY (MaDV) REFERENCES Dich_Vu_Di_Kem(MaDV)
)

USE ql_quan_karaoke;
INSERT INTO `Phong` (`MaPhong`,`LoaiPhong`,`SoKhachToiDa`,`GiaPhong`)
VALUES ('P0001','Loai 1',20,60000),
('P0002','Loai 2',25,80000),
('P0003','Loai 3',15,50000),
('P0004','Loai 4',20,50000);

USE ql_quan_karaoke;
INSERT INTO `Khach_Hang` (`MaKH`,`TenKH`,`DiaChi`,`SoDT`) 
VALUES ('KH001','Nguyen Van A','Hoa xuan','1111111111'),
('KH002','Nguyen Van B','Hoa hai','1111111112'),
('KH003','Phan Van A','Cam le','1111111113'),
('KH004','Phan Van B','Hoa xuan','1111111114');

USE ql_quan_karaoke;
INSERT INTO `Dich_Vu_Di_kem` (`MaDV`,`TenDV`,`DonViTinh`,`DonGia`)
VALUES ('DV001','Beer','lon',10000),
('DV002','Nuoc ngot','lon',8000),
('DV003','Trai cay','dia',35000),
('DV004','Khan uot','cai',2000);

USE ql_quan_karaoke;
INSERT INTO `Dat_Phong` (`MaDatPhong`,`MaPhong`,`MaKH`,`NgayDat`,`GioBatDau`,`GioKetThuc`,`TienDatCoc`,`GhiChu`,`TrangThai`)
VALUES ('DP001','P0001','KH002','2018-03-26','11:00','13:30',100000,NULL,'Da dat'),
('DP002','P0001','KH003','2018-03-27','17:15','19:15',50000,NULL,'Da huy'),
('DP003','P0002','KH002','2018-03-26','20:30','20:15',100000,NULL,'Da dat'),
('DP004','P0003','KH001','2018-04-01','19:30','21:15',200000,NULL,'Da dat');

USE ql_quan_karaoke;
INSERT INTO `Chi_Tiet_Su_Dung_Dich_vu` (`MaDatPhong`,`MaDV`,`SoLuong`) 
VALUES ('DP001','DV001',20),
('DP001','DV002',3),
('DP001','DV002',10),
('DP002','DV002',10),
('DP002','DV003',1),
('DP003','DV003',2),
('DP003','DV004',10);