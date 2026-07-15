---
date: "2026-07-15"
title: "Fix searchable dropdown behavior in form dialogs"
repo: erp-len-ui
product:
  - web
additions: 142
deletions: 95
---

Multiple rapid fixes to the searchable dropdown components ensure they work reliably inside EntityTable create and edit dialogs.

- **Proper overlay:** Dropdown menus inside dialogs now float on top of the dialog instead of being trapped by the dialog's scroll area, so all options remain visible even in long forms
- **No auto-open on dialog focus:** Dropdowns no longer spring open automatically when a dialog appears, preventing unexpected popups before the user has interacted with the field
- **Instant form refresh:** Picking an option from a searchable dropdown immediately updates the form display, without needing to click away first
- **Click-outside to close:** Multi-select dropdowns now close when clicking outside the dropdown area, matching standard form behavior
- **Removable selection chips:** Selected items in multi-select fields display as individual chips with a remove button, allowing quick deselection without reopening the dropdown
