---
date: "2026-08-01"
title: "Stop tariff re-import from silently resetting pricing configuration"
repo: len-approval-api
product:
  - backend
additions: 363
deletions: 28
---

- **Volumetric divisor preserved:** Re-importing CJ tariff sheets no longer resets the volumetric weight divisor for each transport mode back to its default value. An operator who tuned a divisor for a specific mode will keep that setting across future imports, preventing prices from changing silently.

- **Mode identity stable:** Pricing modes keep their original database identity and configuration after a re-import, instead of being deleted and recreated from scratch. This prevents foreign key mismatches and keeps audit trails intact.

- **Inactive mode warnings:** If a required transport mode is stored as inactive, the import now warns about it explicitly. Without this, tariffs for the inactive mode would appear to import successfully but would never produce a price, reporting as "route not registered" instead.