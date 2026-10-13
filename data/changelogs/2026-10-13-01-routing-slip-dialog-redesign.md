---
date: "2026-10-13"
title: "Redesign the S/N routing slip history dialog"
repo: ui-wms
product:
  - web
additions: 425
deletions: 190
---

The S/N Routing Slip history dialog on the Network S/N, XL Home S/N, and Tested Inventory Per S/N pages has been rebuilt with a cleaner, consistent layout.

- **Fits any screen:** The dialog now fits the screen properly, shows the serial number in the header next to a large close button, and keeps pagination and the Tutup button visible even on short screens
- **Only the history scrolls:** Long history lists scroll inside the dialog while the header and buttons stay in place, and long statuses or values wrap cleanly instead of being cut off
- **Honest loading state:** The dialog now shows its own "Memuat riwayat..." loading indicator instead of the page's loading spinner painting over it, and "Belum ada data" only appears once the history has actually finished loading
- **Theme aware:** Table text follows the Light/Dark theme (including on hover), and phone users still see the column labels (No, Action, Tanggal, User) on each card
