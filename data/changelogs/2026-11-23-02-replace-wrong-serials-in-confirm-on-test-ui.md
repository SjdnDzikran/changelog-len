---
date: "2026-11-23"
title: "Replace wrong serial numbers directly in Confirm on test"
repo: ui-wms
product:
  - web
additions: 1335
deletions: 63
---

The Goods Issue Confirm on test screen now shows exactly what blocks each serial and lets operators fix a wrong serial on the spot, in the same dialog, instead of bouncing between screens or re-uploading.

- **Ganti S/N in the Resolve dialog:** Each blocked serial that can be corrected shows a "Ganti S/N" button; the operator scans the replacement label or picks one from the list of available serials on that rack (searchable, up to 500 listed), and the change is saved and re-checked immediately
- **Structured problem list:** Blocked serials appear as cards with a short tag (for example "QI #9057" or "Material berbeda"), the serial and its rack, the cause, and a clearly separated "Yang perlu dilakukan" action line
- **Resolve button always opens the dialog:** Clicking Resolve now either asks for confirmation or lists everything standing in the way, so staff no longer wonder why the button appears to do nothing
- **Periksa ulang S/N:** A one-click re-check reloads every serial against current stock, inside the same dialog, after corrections or when the document was changed elsewhere
- **Replacement confirmations:** Every serial replaced during the session is listed at the top of the dialog until Resolve completes, including whether the new serial matched stock on the rack or still needs registration
