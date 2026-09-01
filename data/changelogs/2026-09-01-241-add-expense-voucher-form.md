---
date: "2026-09-01"
title: "Add operational expense voucher form for petty cash"
repo: erp-len-ui
product:
  - web
additions: 730
deletions: 91
---

The expense creation page now displays a structured voucher form organized into four clearly labeled sections, replacing the previous simple amount-and-description layout.

- **Data Operasional section:** Driver name (Nama), vehicle plate (NoPol), date, area, starting and ending odometer readings, fuel volume in liters, and an auto-calculated distance field
- **Rincian Biaya section:** Twelve monetary fields covering every line item from the physical voucher, including travel allowance, incentives, loading/unloading, charter, vendor, handling, maintenance, fuel cost, and a manually entered total, all formatted with Indonesian Rupiah separators
- **E-Toll section:** Five fields for starting balance, top-up, toll usage, parking usage, and remaining balance
- **Catatan Perjalanan section:** Free-text notes, pick-up point, and delivery destination
- **Historical compatibility:** Older expense records that lack voucher details show an informational notice on the edit page and keep the simple edit layout, so past data is never disrupted
- **Input validation:** All monetary fields reject negative values, odometer readings are validated (end cannot be lower than start), and identity fields are required before submission
