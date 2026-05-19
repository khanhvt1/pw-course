Date: 16.5.2026

Đoạn code này đang kiểm tra một khái niệm rất quan trọng trong JavaScript: **truthy / falsy values**.

```javascript
let x = 0;

if (x) {
    console.log('Truthy');
} else {
    console.log('Falsy');
}
```

Kết quả:

```javascript
Falsy
```

## Vì sao lại là `Falsy`?

Trong JavaScript, điều kiện bên trong `if (...)` sẽ được **ép kiểu sang boolean**.

Ở đây:

```javascript
if (x)
```

thực chất JavaScript hiểu giống như:

```javascript
if (Boolean(x))
```

Với:

```javascript
x = 0
```

thì:

```javascript
Boolean(0) // false
```

nên chương trình chạy vào `else`.

---

## Các giá trị `falsy` trong JavaScript

Có một số giá trị đặc biệt khi ép sang boolean sẽ thành `false`:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Ví dụ:

```javascript
Boolean(0)          // false
Boolean("")         // false
Boolean(null)       // false
Boolean(undefined)  // false
```

---

## Các giá trị `truthy`

Ngoài các giá trị trên thì hầu hết đều là `true`.

Ví dụ:

```javascript
Boolean(1)       // true
Boolean("hello") // true
Boolean([])      // true
Boolean({})      // true
```

Ngay cả:

```javascript
Boolean("0") // true
```

vì `"0"` là string không rỗng.

---

## Minh họa dễ hiểu

### Case 1 — số 0

```javascript
let x = 0;

if (x) {
   console.log("Truthy");
}
```

→ Không chạy vì `0` là falsy.

---

### Case 2 — số khác 0

```javascript
let x = 5;

if (x) {
   console.log("Truthy");
}
```

→ Chạy vì `5` là truthy.

---

### Case 3 — string rỗng

```javascript
let x = "";

if (x) {
   console.log("Truthy");
}
```

→ Không chạy vì `""` là falsy.

---

### Case 4 — string có ký tự

```javascript
let x = "0";

if (x) {
   console.log("Truthy");
}
```

→ Chạy vì `"0"` là truthy.

---

## Điểm quan trọng khi đi làm thực tế

Rất nhiều bug JavaScript đến từ việc dùng:

```javascript
if (value)
```

mà không để ý `0` hay `""` cũng bị coi là false.

Ví dụ nguy hiểm:

```javascript
let price = 0;

if (!price) {
   console.log("Price missing");
}
```

Ở đây `0` có thể là giá hợp lệ, nhưng code lại nghĩ là “không có giá”.

Khi cần kiểm tra chính xác `null` hoặc `undefined`, thường nên viết rõ:

```javascript
if (price === null || price === undefined)
```

hoặc:

```javascript
if (price == null)
```

(kiểm tra cả `null` và `undefined`).
