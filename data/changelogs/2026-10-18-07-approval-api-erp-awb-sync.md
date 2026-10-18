---
date: "2026-10-18"
title: "Fill ERP air waybills completely from approval forms"
repo: len-approval-api
product:
  - backend
additions: 3768
deletions: 659
---

Shipment forms (BL Outbound, BL Inbound, Pickup Domestic) now write complete air waybills into ERP, filling in what previously had to be typed by an ERP operator by hand.

- **Full route and contacts:** Origin branch, sender customer with address and phone, destination village, and recipient all come from the approval form's reference data
- **Automatic pricing:** Each AWB now carries the CJ price, either per-kilogram with its minimum weight or a flat charter rate, plus packing wood fees, instead of arriving in ERP unpriced
- **ERP operators stay in charge:** Anything an ERP operator already filled in is never overwritten; mismatches are kept and reported so someone can settle them
- **Sync log per AWB:** Every waybill records whether it was created, updated, skipped, or failed, with warnings for anything the form could not fill in, and administrators can re-send a form's AWBs on demand
- **Bug fixes included:** Pickup Domestic AWBs no longer carry zero weights, missing transport modes are no longer silently defaulted, and AWBs are updated (not only created) during the AWB step
