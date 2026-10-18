# 📚 HỆ THỐNG LUYỆN THI TIẾNG ANH 12 - GIỮA KÌ 1 (GLOBAL SUCCESS)
### Giáo viên thiết kế: Ms. Duyên (12A1 & 12A4) | Sẵn sàng cho Render 24/24

---

## 🌟 Giới thiệu
Hệ thống luyện thi trực tuyến tổng hợp 16 bài học và đề thi ôn tập Tiếng Anh lớp 12 Giữa Học Kì 1 theo chương trình GDPT 2018 (Global Success). Tích hợp toàn bộ file âm thanh MP3 nguyên bản, bài dịch song ngữ, phòng từ vựng Vocabulary Lab và hệ thống cấp Giấy chứng nhận hoàn thành.

## 📁 Cấu trúc thư mục
```
├── index.html                  # Trang chủ điều hành trung tâm (Dashboard Khối 12)
├── server.js                   # Node.js Server chạy độc lập & Render Web Service
├── package.json                # Cấu hình npm start
├── render.yaml                 # Cấu hình tự động triển khai trên Render
├── audio/                      # Tệp âm thanh gốc MP3 cho các bài nghe
│   ├── test1-part1.mp3
│   ├── test1-part2.mp3
│   ├── test2-part1.mp3
│   └── test2-part2.mp3
├── assets/
│   ├── css/
│   │   ├── portal.css          # Giao diện trang chủ cao cấp
│   │   └── shared-nav.css      # Giao diện thanh điều hướng dùng chung
│   └── js/
│       ├── portal.js           # Logic quản lý học sinh, thống kê, bộ lọc
│       └── shared-nav.js       # Logic đồng bộ họ tên, lưu điểm số
└── tests/                      # 16 chuyên đề và đề thi hoàn chỉnh
    ├── e12-test01-listening-part1.html
    ├── e12-test01-listening-part1-vocab.html
    ├── e12-test01-listening-part2.html
    ├── e12-test01-listening-part2-vocab.html
    ├── e12-test01-reading-q1-5.html
    ├── e12-test01-reading-q14-18.html
    ├── e12-test01-reading-q19-24.html
    ├── e12-test02-listening-part1.html
    ├── e12-test02-listening-part1-vocab.html
    ├── e12-test02-listening-part2.html
    ├── e12-test02-listening-part2-vocab.html
    ├── e12-test02-reading-q9-13.html
    ├── e12-test02-reading-q14-18.html
    ├── e12-test02-reading-q19-24.html
    ├── e12-test03-reading-q6-10.html
    └── e12-test03-reading-q11-15.html
```

## 🚀 Triển khai nhanh lên Render (24/24 Miễn Phí)
1. Đăng nhập [render.com](https://render.com) bằng GitHub.
2. Chọn **New +** ➜ **Static Site** ➜ Chọn kho `tienganh12-msduyen`.
3. Bấm **Create Static Site** ➜ Website hoạt động 24/7 tức thì!
