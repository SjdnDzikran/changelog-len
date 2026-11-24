---
date: "2026-11-23"
title: "Fix and correct serial number conflicts before Goods Issue"
repo: api-wms
product:
  - backend
additions: 1655
deletions: 103
---

The Confirm on test step (resolving scanned serial numbers before Goods Issue) now explains every blocked serial instead of failing with a generic error, and a wrong serial can be corrected on the spot without re-uploading the document.

- **Clear reasons per serial:** Each conflicting serial now shows its material, rack, the cause (still in Quality Inspection, registered under a different material, already issued, blocked, and more) and the exact next step, instead of a generic failure
- **Ganti S/N (replace serial):** A wrong serial on an uploaded row can be replaced directly from the document while it is still in Requested status, by scanning the physical unit label or picking from the list of available serials on that rack, so a typo or a serial on the wrong line no longer forces a full re-upload
- **No more duplicate double-processing:** Two staff clicking Resolve on the same document at once no longer cause a server error or double stock reservation; the second click waits briefly and returns a clear "already processing" or "already resolved" message
- **Safe new-serial registration:** Unregistered serials can be registered during Resolve only when a free slot exists on the current rack, and only with explicit confirmation, keeping stock counts accurate
