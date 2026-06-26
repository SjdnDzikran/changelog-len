---
date: "2026-06-26"
title: "Add globally unique ETR tracking numbers to approval forms"
repo: len-approval-api
product:
  - backend
additions: 5628
deletions: 2
---

- **ETR numbers on every form:** BL Inbound, BL Outbound, and Pickup Domestic forms now each carry a system-generated ETR (Electronic Transaction Record) number, formatted as ETR00001, ETR00002, and so on. These are auto-assigned during form creation and cannot be edited.
- **Globally unique across form types:** A single shared counter ensures no two forms across any type will ever share the same ETR number, so every transaction can be unambiguously identified regardless of which form it belongs to.
- **BL Outbound gets its own reference number:** BL Outbound forms now store a dedicated BL Number (the customer reference) separate from the internal outbound number, making it easier to match records with customer communications. Existing historical forms have been backfilled automatically.
