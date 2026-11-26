---
date: "2026-11-26"
title: "OMS no longer hides errors: clear messages, retry buttons, offline banner"
repo: erp-len-ui
product:
  - web
additions: 2071
deletions: 629
---

Four releases focused on making failures visible and understandable, instead of silent or confusing, across the whole OMS application.

- **Failed data loads are no longer mistaken for empty data:** When a table fails to fetch its data, the page now shows a clear error message with a "Muat Ulang Data" retry button instead of looking like an empty database. This has been applied across the AWB, Booking, Manifest, DRS, Inventory, Petty Cash, Users, Roles, and CMS pages.
- **Offline warning banner:** When the browser loses its internet connection, a banner appears warning that changes cannot be saved, and confirms with a green toast once the connection returns.
- **Readable upload limits:** If an uploaded file is too large, the message now shows the actual and allowed size in plain MB units (e.g. "8,0 MB melebihi batas maksimal 5,0 MB") instead of raw technical text.
- **Session expirations are handled gracefully:** When a login session expires, users are returned to the sign-in page with a friendly "Sesi Anda telah berakhir" notice and are brought back to the page they were on after logging in again. Slow server responses now get a clear timeout message rather than hanging silently.
- **Error reference codes for faster support:** Serious server errors now show a short reference code (e.g. "Kode: #A1B2C3D4") that IT staff can match directly to the server log, and page crashes now show a recovery card in Bahasa Indonesia with retry and home buttons instead of a broken screen.
