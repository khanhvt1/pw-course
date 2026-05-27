/*5. Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
a. In ra các giá trị chia hết cho 3 từ 1000 đến 2000 */
// for (let i = 1000; i <= 2000; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

/*5. Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:
a. In ra các giá trị chia hết cho 3 từ 1000 đến 2000 
Tối ưu code theo suggest của Mentor*/

for (let i = 1002; i <= 2000; i += 3) {
console.log(i);
}

/*Cách này sẽ giúp tối ưu hiệu suất hơn
 -> tìm số đầu tiên chia hết cho 3 (1002)
  -> ở mỗi bước nhảy cộng thêm 3 (i += 3)
   => giúp vòng lặp chạy nhanh hơn gấp 3 lần và không cần gọi thêm bước check if*/