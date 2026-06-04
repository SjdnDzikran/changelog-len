---
date: "2026-05-11"
title: "Add AWB number booking page with range and Excel upload modes"
repo: erp-len-ui
product:
  - web
deletions: 73
additions: 583
---

A new **Booking AWB** page gives users a streamlined interface to reserve AWB numbers in bulk.

- **Two input modes** — Choose between **Input Range** for consecutive numbers (with optional prefix and live preview) or **Upload Excel** for non-consecutive or large batches. A downloadable template is provided for the upload flow.
- **Customer auto-fill** — Selecting a customer automatically populates sender name, phone, and address, consistent with the existing AWB creation flow.
- **Validation before commit** — The Excel upload mode validates the file first and shows per-row results, so users can fix errors before submitting.
- **BOOKED badge and filter** — The AWB list now shows a distinct orange "BOOKED" badge, with a new status filter to quickly find all booked AWBs.
- **Edit and delete for booked AWBs** — Booked AWBs can be edited and deleted directly from the list, and when enough data is filled in, the status automatically upgrades to CREATED.
- **Print support for booked AWBs** — Booked AWBs can be printed with clean blank fields. Colly label printing is disabled until items are added.
