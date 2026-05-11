---
date: "2026-05-11"
title: "Reserve AWB numbers before shipment details are ready"
repo: erp-len-api
product:
  - backend
---

A new **AWB Booking** workflow lets operations reserve AWB numbers upfront, before shipment details are available.

- **New "BOOKED" status** — AWB numbers can be created in a reserved state, so agents and branches can claim numbers in advance without filling in recipient or shipment data.
- **Book by range** — Specify a prefix, start number, and end number (e.g. `LEN-001` to `LEN-050`) to bulk-reserve consecutive AWB numbers in one step. An option to use the system auto-sequence is also available.
- **Book via Excel upload** — Upload a spreadsheet with AWB numbers and optional sender details. The system validates all rows before creating anything, so errors are caught early without partial data.
- **Automatic status upgrade** — When a booked AWB is later edited and the required fields (recipient name, item count) are filled in, it automatically transitions from BOOKED to CREATED, ready for the normal workflow.
- **Clean printed output for bookings** — Printed AWB documents for booked numbers show blank fields instead of placeholder dashes, so the printed shell is ready to be filled in by hand.
