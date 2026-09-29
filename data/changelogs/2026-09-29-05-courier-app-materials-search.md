---
date: "2026-09-29"
title: "Courier app shows booking materials list and instant search"
repo: len-app
product:
  - mobile
additions: 324
deletions: 9
---

Two courier-facing improvements to the pickup flow:

- **Materials list on pickup detail:** The pickup detail screen now includes a "Daftar Barang" card listing every item on the booking, with its description, piece count (Qty), and total weight and volume per line, plus a row and piece-count summary in the header. Couriers can verify what they are collecting without opening the web app.
- **Search-as-you-type:** The search bar now filters the booking list automatically half a second after typing stops, no Enter press needed. Clearing the field instantly restores the full list.
- **Search that actually finds senders and recipients:** A search bug was making lookups by sender, recipient, or reference number return nothing. One search term now matches across booking number, sender, recipient, reference, and creator names.
