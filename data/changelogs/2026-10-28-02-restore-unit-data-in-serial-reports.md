---
date: "2026-10-28"
title: "Restore unit data in serial number reports"
repo: api-wms
product:
  - backend
additions: 349
deletions: 2
---

- **Units travel with the data again:** Serial number lists and per-serial tested inventory reports now include each item's recorded unit, so the web panel shows the real unit instead of "Belum tercatat" for units that are already recorded
- **No guessing:** The unit shown always comes from the stock record itself; the system never infers a unit from the material code or the serial text, and identical serial text on two separately tracked units stays correctly separate
- **Protected by automated tests:** Seventeen new automated checks confirm units display correctly through paging, across warehouses, and for unusual units like metres and sets, so this display cannot silently break again
