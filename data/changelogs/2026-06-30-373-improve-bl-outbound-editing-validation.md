---
date: "2026-06-30"
title: "Improve BL Outbound form editing and data protection"
repo: len-approval-api
product:
  - backend
additions: 880
deletions: 13
---

Backend improvements for BL Outbound forms enable more flexible draft workflows and prevent data integrity issues when issuing stock.

- **Empty draft creation:** Users can save a BL Outbound draft without selecting stock items first, then add items later before submitting
- **Editable general information:** A new endpoint lets draft creators update the outbound number, date, BL number, and remarks without re-creating the form
- **Stock protection on submit:** The backend verifies each stock row's status before issuing, preventing double-issuing of already-dispatched items
- **Quantity and dimension validation:** Issue quantities are checked against remaining stock, and submit enforces positive dimensions plus non-negative wood-packing costs
