---
date: "2026-11-26"
title: "All system error messages now speak Bahasa Indonesia"
repo: erp-len-api
product:
  - backend
additions: 2141
deletions: 890
---

Over four releases, every error a user can trigger in the TMS system has been rewritten from English into clear, polite Bahasa Indonesia, and technical details are no longer exposed to users.

- **Everyday messages users will see:** Login problems now explain themselves ("Email atau password salah. Silakan coba lagi.", "Akun Anda sedang tidak aktif. Silakan hubungi administrator."), password and profile forms tell users exactly which field is wrong and why, and all form validation messages across the system are now in Bahasa Indonesia.
- **Safe error messages:** When a bulk upload or data import fails, the system no longer leaks internal technical details (table names, server errors) to users. Instead it shows a plain explanation plus a short reference code that IT staff can use to find the exact cause in the logs.
- **Clearer explanations for blocked actions:** If a user tries to delete a customer, branch, agent, driver, or tariff that is still referenced by other transactions, the message now says so plainly in Bahasa Indonesia instead of a generic English error.
- **Honest feedback for photo and document uploads:** Upload errors now state the real problem in Indonesian: wrong file type (only JPG, PNG, GIF, WEBP accepted), empty file, size over the 5 MB limit, or a file whose contents don't match its extension.
