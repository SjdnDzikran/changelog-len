---
date: "2026-08-01"
title: "Add simplified upload mode and one-click QI confirmation to inbound workflow"
repo: ui-wms
product:
  - web
additions: 163
deletions: 17
---

- **Upload mode selector:** A toggle on the upload modal lets operators choose between the full template and the new simplified "QI Direct" template. The simplified mode only requires material code, quantity, plant, storage location, bin, unit of measure, and a pallet label.

- **One-click QI confirmation:** QI batches show a dedicated "Konfirmasi & Alokasi QI" button instead of the standard upload-based confirmation flow, reducing the process to a single click. The button only appears when the batch was uploaded via the QI Direct template.

- **"Pending S/N" display:** Serial numbers created by the simplified upload are shown as "Pending S/N" in the item list, making it immediately clear which units still need physical scanning on the Tested Inventory screen.