USE QL_Quan_Karaoke;
SELECT * FROM `Chi_Tiet_Su_Dung_Dich_Vu` WHERE `SoLuong` > 3 AND `SoLuong` < 10;

USE QL_Quan_Karaoke;
UPDATE `phong` SET `GiaPhong` = `GiaPhong` + 10000 
WHERE `SoKhachToiDa` > 10;

USE QL_Quan_Karaoke;
DELETE FROM `Chi_Tiet_Su_Dung_Dich_Vu` WHERE `MaDatPhong` IN (SELECT `MaDatPhong` FROM `Dat_Phong` WHERE `TrangThai` LIKE '%da huy%');
DELETE FROM `Dat_Phong` WHERE `TrangThai` LIKE '%da huy%';

USE QL_Quan_Karaoke;
SELECT TenKH FROM `Khach_Hang` 
WHERE (`TenKH` LIKE'%N%' OR `TenKH` LIKE '%H%' OR `TenKH` LIKE '%M%') and LENGTH(`TenKH`) > 20;