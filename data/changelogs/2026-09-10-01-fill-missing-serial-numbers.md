---
date: "2026-09-10"
title: "Fill in missing serial numbers without touching stock"
repo: api-wms
product:
  - backend
additions: 210
deletions: 27
---

Some units of stock carried a placeholder instead of a real serial number, and those rows were hidden from Manage Serial Number even though they still counted toward the bin's stock. That made bins look short of serial numbers with no way to correct them. This release lets operators complete those records safely.

- **Waiting stock can now be completed:** A row whose physical serial number was never captured can be filled in directly, and the stock quantity and its entire history stay exactly as they were. Fixing a missing serial no longer means recreating stock.
- **Inspection workflows stay in charge:** Units still owned by Quality Inspection or the test bench cannot be filled from this screen. The system explains that the serial must be recorded through the Tested Inventory flow instead, so the two processes can no longer conflict.
- **Shipped goods stay protected:** Units that already have outbound history still cannot have their serial number replaced here.
- **Deletion is blocked for real stock:** A unit waiting for its serial number cannot be deleted; the only valid action is filling in the actual serial, which prevents stock from silently disappearing while the quantity remains on the books.
- **Cleaner messages for operators:** Error messages never expose internal placeholder codes; waiting rows are described as still waiting for their serial number.
