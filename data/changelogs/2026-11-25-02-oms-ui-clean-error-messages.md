---
date: "2026-11-25"
title: "Clean error popups on print, export, and user management"
repo: erp-len-ui
product:
  - web
additions: 234
deletions: 76
---

- **Cetak dan ekspor sekarang melaporkan masalah nyata:** Ketika Print PDF atau Export Excel gagal (misalnya kolli belum memiliki dimensi untuk dicetak), aplikasi menampilkan pesan validasi server yang sebenarnya dalam Bahasa Indonesia alih-alih dialog kesalahan bahasa Inggris generik atau dump JSON mentah.
- **Peringatan koneksi internet yang jelas:** Jika koneksi ke server terputus saat menyimpan, mencetak, atau mengekspor, pengguna melihat instruksi sederhana "Gagal terhubung ke server, periksa koneksi internet Anda" dan tidak lagi melihat teks kesalahan teknis browser seperti "Failed to fetch".
- **Tidak ada lagi status "berhasil" palsu:** Dialog pembaruan status pengiriman hanya melaporkan keberhasilan ketika perubahan benar-benar berhasil disimpan; kegagalan sekarang ditampilkan dengan pesan kesalahan spesifik dari server.
- **Pengeditan pengguna dan peran lebih mudah dipulihkan:** Kesalahan saat mengedit atau menghapus pengguna dan peran, serta mengalihkan status aktivasi pengguna, ditampilkan sebagai pesan Bahasa Indonesia yang jelas dan tetap terlihat selama 8 detik agar cukup waktu untuk membacanya.
