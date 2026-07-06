---
date: "2026-07-06"
title: "Add Plant Asal and Plant Tujuan selector to transfer form"
repo: ui-wms
product:
  - web
additions: 103
deletions: 4
---

The inventory transfer form now shows Plant Asal and Plant Tujuan fields, allowing warehouse staff to specify the destination Plant when moving stock between facilities.

- **Plant Asal (read-only):** Displays the current Plant of the selected material, so staff can confirm the origin before transferring
- **Plant Tujuan (dropdown):** A selectable dropdown defaults to the current Plant but can be changed to any valid Plant, giving full control over the destination categorization
- **Transfer Summary row:** The summary section now shows a Plant Asal to Plant Tujuan row, making it easy to verify the transfer before saving
- **On-Test departure warning:** When transferring from an On-Test bin to a regular bin, a yellow warning banner appears to alert staff that only Tested-status items can proceed
