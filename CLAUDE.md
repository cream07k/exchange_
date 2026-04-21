# webExchange — โปรแกรมแปลงสกุลเงิน

## โปรเจกต์นี้คืออะไร
เว็บแอปแปลงสกุลเงิน (Currency Converter) สร้างด้วย HTML, CSS, และ JavaScript (ยังไม่มี JS)

## ไฟล์ในโปรเจกต์
- `index.html` — โครงสร้างหน้าเว็บ
- `st.css` — สไตล์ชีต (ใช้ id selector ทั้งหมด ไม่ใช้ class เพื่อไม่ชนกับ Tailwind)
- `_img/money.png` — รูปภาพ header

## สิ่งที่ทำไปแล้ว
- [x] สร้าง HTML โครงสร้างหลัก (select สกุลเงิน 2 ฝั่ง, input จำนวนเงิน, ปุ่มสลับ)
- [x] เพิ่ม Tailwind CSS ผ่าน CDN (`https://cdn.tailwindcss.com`)
- [x] เปลี่ยนทุก `class` เป็น `id` เพื่อไม่ชนกับ Tailwind
- [x] CSS จัด layout กึ่งกลางหน้าจอด้วย flexbox + `min-height: 100vh`
- [x] เพิ่ม border และ border-radius ให้รูปภาพ (`#_img`)

## ID ที่ใช้ใน HTML
| id | element | หน้าที่ |
|---|---|---|
| `con_` | `<main>` | wrapper หลัก |
| `title` | `<div>` | หัวข้อโปรแกรม |
| `container` | `<div>` | กล่องหลักครอบทั้งหมด |
| `currencyOneBox` | `<div>` | ฝั่งซ้าย (ต้นทาง) |
| `rate_C_one` | `<div>` | label ฝั่งซ้าย |
| `currencyOne` | `<select>` | dropdown สกุลเงินต้นทาง (default: THB) |
| `amount-one` | `<input>` | จำนวนเงินต้นทาง |
| `swapContainer` | `<div>` | กล่องปุ่มสลับ |
| `btn` | `<button>` | ปุ่มสลับสกุลเงิน |
| `currencyTwoBox` | `<div>` | ฝั่งขวา (ปลายทาง) |
| `rate_C_two` | `<div>` | label ฝั่งขวา |
| `currencyTwo` | `<select>` | dropdown สกุลเงินปลายทาง (default: USD) |
| `amount-two` | `<input>` | จำนวนเงินที่แปลงแล้ว |

## สิ่งที่ยังไม่ได้ทำ
- [ ] JavaScript — ดึงอัตราแลกเปลี่ยนจาก API
- [ ] JavaScript — คำนวณและแสดงผล
- [ ] JavaScript — ปุ่มสลับสกุลเงินทำงานได้จริง
- [ ] ตกแต่ง UI ให้สวยงามด้วย Tailwind

## หมายเหตุ
- ใช้ `id` selector ใน CSS (`#`) ทั้งหมด ห้ามเปลี่ยนกลับเป็น `class`
- Tailwind และ st.css ใช้ร่วมกัน โดย st.css จะ override Tailwind ได้
