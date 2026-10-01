---
date: "2026-10-01"
title: "Unit codes now managed per warehouse instead of a fixed built-in list"
repo: api-wms
product:
  - backend
additions: 573
deletions: 18
---

Which units of measure (PCS, BOX, ROL and so on) a warehouse may use was previously a fixed list written into the system. It now lives in a database catalogue per warehouse, so administrators control it, and every entry path checks against it.

- **Per-warehouse control:** Each warehouse has its own unit catalogue; administrators add new codes from the reference panel without code changes or redeployment
- **Applied everywhere at once:** Manual entry and Excel upload for inbound, outbound, adjustments, transfers and tested inventory all validate against the same catalogue, replacing the old fixed list
- **Stock identity protected:** Existing unit codes can never be deleted or renamed, because they identify stock and transaction history
- **Fails safely:** If a warehouse has no catalogue configured, the system reports it clearly instead of silently accepting anything
