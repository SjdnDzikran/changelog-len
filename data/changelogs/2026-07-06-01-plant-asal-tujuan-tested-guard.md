---
date: "2026-07-06"
title: "Add Plant source and destination tracking to inventory transfers"
repo: api-wms
product:
  - backend
additions: 243
deletions: 99
---

Inventory transfers now record both the source Plant (Plant Asal) and destination Plant (Plant Tujuan) separately, instead of using a single Plant field. This enables accurate tracking when stock moves between different plants or facilities.

- **Separate Plant Asal and Plant Tujuan:** Transfer records now capture where stock came from and where it is going, giving full visibility into inter-plant movements
- **Automatic stock re-categorization:** When stock is transferred, the destination inventory is automatically categorized under the target Plant, keeping stock records accurate without manual updates
- **Backward compatible:** Existing transfers and older clients continue to work with the legacy single-Plant field, which now defaults to the destination Plant
- **Tested item history preserved:** Items that have passed quality testing retain their complete test history when moved out of an On-Test bin, instead of losing the records
- **Transfer blocked for untested items:** The system now prevents moving untested serial numbers out of an On-Test bin to a regular bin, stopping incomplete quality checks from being bypassed
- **Transfer report columns:** The Excel export now includes Plant Asal and Plant Tujuan as separate columns alongside the existing Plant field
