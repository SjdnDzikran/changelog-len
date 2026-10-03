---
date: "2026-10-03"
title: "Enter POD for every shipment on a DRS or Manifest in one go"
repo: erp-len-ui
product:
  - backend
  - web
additions: 1073
deletions: 136
---

Proof of delivery can now be recorded for an entire delivery document at once, instead of hunting shipments one by one.

- **New "Input POD by DRS / Manifest":** Type a DRS or Manifest number on the Shipment Status page and every AWB on that document loads into one form, with the document's date, status, route, driver and vehicle shown up front so staff can confirm they have the right delivery
- **Fill all rows at once:** A new "Isi semua baris" option applies one status and date to every empty row (or all rows, with a clear warning when it touches rows already in edit mode), turning dozens of repetitive entries into a single action
- **Search by document toggle:** Choose DRS or Manifest with a toggle, press Enter to load, and only shipments the user is allowed to touch appear in the list
- **Restyled form:** The POD input dialog now matches the newer app look with a gradient header, rounded inputs, status pills per row and clearer progress messages while saving
