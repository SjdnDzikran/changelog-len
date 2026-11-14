---
date: "2026-11-14"
title: "Stop counting unsaved address picks in usage stats"
repo: erp-len-ui
product:
  - web
additions: 4
deletions: 70
---

The AWB and booking forms no longer silently record a "use" every time an address is picked from the saved-address list, which was making usage statistics unreliable.

- **Cleaner statistics:** Usage numbers on the address pages now come purely from saved shipments, matching the new backend counting logic. Repeated edits, failed saves and abandoned forms can no longer inflate them.
- **Clearer hint text:** The address picker's hint now simply says "Pilih alamat tersimpan untuk mengisi data penerima." instead of promising that frequently used addresses float to the top.
- **Explain-the-number tooltips:** The usage count on the address list, detail and edit pages shows a tooltip explaining it counts saved shipments matching that recipient and address, with cancelled shipments excluded.
