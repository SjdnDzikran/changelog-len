---
date: "2026-08-01"
title: "Preserve typed item descriptions and manufacturer part numbers on save"
repo: len-approval-api
product:
  - backend
additions: 213
deletions: 3
---

- **Manufacturer part number preserved:** When saving a Part item, the manufacturer's part code (e.g., "SKF-6205-2RS") is no longer overwritten with the internal material number. Previously, every save destroyed the manufacturer reference and replaced it with the system material code, making the original value unrecoverable from the form itself.

- **Typed descriptions kept:** A description entered by a requester or approver is no longer silently replaced by the master material name. The master name is still used as a default when no description is provided, but a typed value is now respected on every save.

- **Protected across all form types:** The fix applies to BL Inbound, BL Outbound, and Pickup Domestic forms, so no form type was left vulnerable to the data loss.