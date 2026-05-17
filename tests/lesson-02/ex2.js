const myName = "Alex";
myName = "Nagi";
console.log(myName);

/** 
 * Lỗi: Không thể gán lại giá trị cho hằng số 'myName'
 * Giải thích: 'const' được sử dụng để khai báo hằng số, giá trị của nó không thể thay đổi sau khi đã được gán.
 */

let myName = "Alex";
myName = "Nagi";
console.log(myName);

/**
 * Không có lỗi: Biến 'myName' được khai báo bằng 'let', cho phép gán lại giá trị.
 * Kết quả: In ra "Nagi" trên console.
 */

const myName = "Alex";
console.log(myName);
/** * Không có lỗi: Biến 'myName' được khai báo bằng 'const' và được gán giá trị "Alex". 
 * Kết quả: In ra "Alex" trên console.
 */
