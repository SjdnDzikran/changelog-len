---
date: "2026-06-06"
title: "Replace Origin dropdown with free-text input on BL Inbound and BL Outbound"
repo: ui-wms
product:
  - web
additions: 19
deletions: 79
---

- **Free-text Origin:** The Origin field on BL Inbound and BL Outbound detail pages is now a plain text input instead of a branch dropdown, so users can type any origin value without being limited to predefined branch names
- **Consistent across dialogs:** Both the add-item and edit-item dialogs on each page use the new text input
- **Existing data preserved:** Previously saved origin values continue to display and work normally
