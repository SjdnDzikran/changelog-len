---
date: "2026-05-28"
title: "Strengthen BL Inbound approval with TMS integration"
repo: len-approval-api
product:
  - backend
---

- **Duplicate AWB prevention:** AWB numbers entered during BL Inbound data entry are now checked against TMS in real time, blocking duplicates before they can enter the system and cause downstream conflicts
- **Automatic TMS AWB creation:** When the data entry step on a BL Inbound form is completed, the system automatically creates the corresponding AWB records in TMS, removing the need for manual re-entry
- **Final approval item editing:** Approvers at the last workflow step can now correct item details (box numbers, quantities, destinations, descriptions) directly through a dedicated endpoint, with AWB fields protected from changes
- **Simpler BL Outbound sync:** AWB synchronization for approved BL Outbound forms now works directly by AWB number instead of routing through booking records, making the process more straightforward and reliable
