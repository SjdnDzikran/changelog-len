---
date: "2026-11-25"
title: "Clear Indonesian error messages across OMS master data"
repo: erp-len-api
product:
  - backend
additions: 104
deletions: 103
---

- **Duplikasi kini dijelaskan dengan jelas:** Ketika admin mencoba menyimpan data yang sudah ada (customer, agen, driver, vendor, cabang, tarif, dan master data lainnya), sistem kini menampilkan pesan konflik yang spesifik dalam Bahasa Indonesia, misalnya "Customer dengan nama 'X' sudah terdaftar", alih-alih pesan kesalahan teknis bahasa Inggris.
- **Penghapusan data yang terkunci jadi lebih informatif:** Cabang, vendor, provinsi, kabupaten/kota, dan kategori layanan yang masih memiliki data terkait tidak bisa dihapus, dan pesan kesalahannya sekarang menjelaskan alasan persisnya (misalnya "masih digunakan pada manifest") sehingga staf tahu harus menangani apa terlebih dahulu.
- **Lebih sedikit gagal senyap:** Validasi di seluruh modul OMS kini mengembalikan jenis kesalahan yang tepat (duplikat vs. data tidak valid vs. tidak ditemukan), sehingga aplikasi dapat menampilkan pesan yang benar dan staf dapat langsung memperbaiki masalah tersebut.
