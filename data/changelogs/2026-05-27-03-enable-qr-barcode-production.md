---
date: "2026-05-27"
title: "Enable QR code and barcode generation on production server"
repo: erp-len-api
product:
  - backend
---

**QR and barcode support on VPS:** The TMS production server (recently migrated from Azure to a VPS) can now generate QR codes and barcodes. The image processing library required for this was a Windows-only dependency and has been enabled for Linux, so features that rely on QR or barcode output work correctly in production