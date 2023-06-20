var prompt = require('prompt-sync')({sigint: true});
import { readFileSync, writeFileSync } from 'fs-promise';

/**
 * tên
 * ngày nhập
 * tác giả
 * giá
 * 
 * */

function requireInput(msg) {
    var input = prompt(msg);
    if (!input) {
        requireInput(input, msg)
    } else {
        return input
    }
}

function addBook() {
    var studentName, codestudent, studentscore
    studentName = requireInput('Mời nhập tên sinh viên: ');
    codestudent = requireInput('Mời nhập mã sinh viên: ');
    studentscore = requireInput('Mời nhập điểm: ');

    var studentData = {
        studentName:  studentName,
        codestudent: codestudent,
        studentscore:  studentscore,
        createdAt: new Date()
    }

    var dataWarehouse = readFileSync('dulieu/DanhSachSinhVien.json', { encoding: 'utf-8' })
    dataWarehouse = JSON.parse(dataWarehouse)
    dataWarehouse.push(studentData )
    writeFileSync('dulieu/DanhSachSinhVien.json', JSON.stringify(dataWarehouse), { encoding: 'utf-8' })
    console.log('Lưu thành công.')
    printMenu()

}


function printMenu() {
    var menu = "> 1. Xem danh sách\n  2. Tìm kiếm\n  3. Thêm sinh viên\n  4. Thoát"
    console.log(menu)
    var input = requireInput('Mời chọn chức năng: ')
    input = parseInt(input)

    switch (input) {
    case 1:
        break 
    case 2:
        break 
    case 3:
        addBook()
        break 
    case 4:
        console.log('Tạm biệt!')
        break 
    default:
        printMenu()
        break
    }
}


function main() {
    printMenu()
}

main()