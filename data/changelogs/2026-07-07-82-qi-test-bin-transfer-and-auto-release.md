---
date: "2026-07-07"
title: "Introduce Quality Inspection testing workflow with Test-Bin transfer and auto-release"
repo: api-wms
product:
  - backend
  - web
additions: 541
deletions: 35
---

- **Send to Test Bin:** Quality Inspection items can now be moved from their restriction directly into a Test Bin for physical testing. Admins select the destination SLOC, Test Bin location, and the Tested Inventory document that will record the results, all from a single modal in the Inventory Under Restriction page.
- **Auto-release on test completion:** When a Tested Inventory document is confirmed (whether items pass or fail), the linked Quality Inspection restriction is automatically resolved. Stock returns to the available pool without any manual release step, eliminating the risk of forgotten or delayed resolution.
- **Enforced testing process:** Quality Inspection restrictions can no longer be manually resolved through the Resolve button. They must go through the Send to Test flow, ensuring every flagged item is properly tested before being released back into inventory.
- **Accurate restricted-stock tracking:** Transfers of Quality Inspection and Blocked items now preserve their restricted status throughout the move, so total stock counts remain correct at all times regardless of how items are relocated.
- **Visual indicators:** QI items in the restriction list now show a "Test required" badge and a green "Send to Test" button, making it immediately clear which items need the testing flow versus which can be resolved manually.
