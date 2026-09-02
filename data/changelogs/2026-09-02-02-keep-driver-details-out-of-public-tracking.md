---
date: "2026-09-02"
title: "Keep driver and vehicle details out of public tracking"
repo: erp-len-api
product:
  - backend
additions: 35
deletions: 4
---

Anyone with an AWB number could previously see operational details about who is moving a shipment on the public tracking timeline, including driver names and vehicle identifiers.

- **Driver privacy protected:** Courier and driver names no longer appear in public tracking updates once a shipment is assigned for delivery
- **Vehicle details removed:** License plates for land transport, aircraft and cargo codes for air freight, and vessel and container details for sea freight no longer show on the public timeline
- **Neutral status wording:** Delivery assignment messages now simply say the shipment is in the delivery process instead of naming the assigned driver
- **Staff view unchanged:** Team members logged into the system still see full operational details for day-to-day handling
