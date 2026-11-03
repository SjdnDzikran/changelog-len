---
date: "2026-11-03"
title: "Scannable QR codes for employees and locations"
repo: len-attendance
product:
  - web
additions: 462
deletions: 86
---

**Real QR images:** Attendance QR codes for employees and punch locations are now rendered as actual scannable QR images, both in the admin detail dialogs and as small thumbnails directly in the locations table. Previously only the raw token text was shown, which could not be scanned.

**Always printable:** The QR codes render black-on-white in both light and dark themes, so they scan reliably from screen or printout regardless of the admin's color scheme. The exact token value is still shown beneath the image for manual copy when needed.

**Terminology cleaned up:** Labels were updated from "QR token" to "QR code" in English and Indonesian, matching what users actually see.
