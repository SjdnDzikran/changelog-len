---
date: "2026-08-02"
title: "Map ERP transport mode names to pricing tariff modes"
repo: len-approval-api
product:
  - backend
additions: 6096
deletions: 4
---

Forms that arrive from the ERP system carry transport mode names that the pricing calculator did not recognize, leaving 42 shipment items unpriceable. A new alias table translates these names to the modes the tariff master prices by.

- **Mode name translation:** ERP service names like "Darat Reguler" are now automatically translated to the pricing mode DARAT, and "Multi Charter CDD" translates to CHARTER with vehicle type CDD. The 42 stranded shipment items in production can now be calculated without any change to the ERP data
- **Charter vehicle detection:** Labels that include a vehicle class (e.g., "Multi Charter CDD") not only map to the CHARTER mode but also supply the vehicle type, so charter pricing works even when the form does not explicitly state one
- **Dynamic mapping:** New translations are added as a single database row with no deployment required. A seed script reports which ERP mode names on existing forms are still unmapped, so the product owner always knows what remains to be decided
