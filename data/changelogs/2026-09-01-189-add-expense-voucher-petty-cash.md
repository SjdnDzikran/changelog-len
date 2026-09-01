---
date: "2026-09-01"
title: "Add operational expense voucher to petty cash"
repo: erp-len-api
product:
  - backend
additions: 1454
deletions: 38
---

Petty cash expense records now support a full operational voucher alongside the existing amount and proof attachments. Previously, expenses only captured a total amount, date, and a free-text description with no structured trip or cost breakdown.

- **Driver and vehicle identity:** Each expense can record the driver name, vehicle plate number, service area, and transaction date as required header fields
- **Trip distance tracking:** Starting and ending odometer readings are captured, and the total distance travelled is automatically calculated by the system (never user-editable)
- **12 expense categories:** Travel allowance, in-city and out-of-city incentives, loading/unloading and security, charter, vendor, handling, maintenance, fuel amount, and an "other" catch-all can each be recorded as separate line items
- **E-Toll tracking:** Starting balance, top-up amount, toll usage, parking usage, and remaining balance are tracked in one dedicated section
- **Trip context:** Optional notes, pick-up point, and delivery destination provide searchable context for each expense
- **Backward compatible:** Existing expense records with no voucher details continue to work unchanged; the voucher is optional for new expenses
