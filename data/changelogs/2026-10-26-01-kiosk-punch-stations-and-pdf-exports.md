---
date: "2026-10-26"
title: "Launch self-service punch kiosks and one-click PDF reports"
repo: len-attendance
product:
  - backend
  - web
additions: 10645
deletions: 131
---

The attendance system now supports dedicated wall-mounted punch stations and full PDF report downloads, closing the last gaps with the old application.

- **Punch kiosks are back, done properly:** Admins can register shared punch stations (for example, a tablet at the front gate) from a new admin page. Employees scan their personal QR code and the kiosk automatically records check-in or check-out based on the day's state, with a live screen showing today's attendance counters and the most recent punches.
- **Secure device credentials:** Each kiosk gets its own secret key, shown only once at setup and stored encrypted. Keys can be rotated or revoked instantly from the admin panel, so a lost or compromised tablet never exposes employee data. Kiosks never hold a personal employee or admin login.
- **Direct PDF downloads everywhere:** Attendance history, monthly team reports, leave, permits, overtime, visits, work reports, and payslips can now all be downloaded as polished PDF files directly from the browser, with photos and evidence embedded. No print dialogs, no extra software on the server.
- **Complete report coverage:** Monthly reports include every calendar day (holidays, leave, and absences included), per-employee totals, and GPS coordinates, matching everything the old printable reports contained and more.
- **Verified end to end:** The full API test suite now runs against the staging database with 143 of 143 routes exercised and 559 checks passing, including the new kiosk punch, feed, and key rotation flows.
