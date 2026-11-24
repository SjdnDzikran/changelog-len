---
date: "2026-11-24"
title: "Track inbound uploads live and fix rejected files from the app"
repo: ui-wms
product:
  - web
additions: 4267
deletions: 66
---

The inbound receiving upload dialog (WMS web release 5.22.0) is rebuilt around the new background uploads: staff drop in a file, watch the check run, and can leave the page at any time. When a file needs corrections, the app shows exactly what to fix and accepts the corrected file right away.

- **Drag-and-drop uploads:** The new dialog takes Excel files by drag and drop or file picker, shows the send progress, and confirms each check as it runs, from reading the file through checking every row to saving
- **Safe to walk away:** Once the file is sent, the dialog can be closed; the upload keeps running on the server, and the receiving page shows live progress and notifies when the check is done
- **Readable problem reports:** A rejected file lists the bad cells with row numbers and column names, marks the columns that determine how items are grouped, and breaks totals down per item group with a suggested fix for each
- **One-click corrections:** A downloadable copy of the file arrives with every problem cell highlighted in red; fixing it and uploading it again shows how many issues were resolved, remain, or are new
- **Upload history:** The last few upload attempts for a receiving document are listed with their outcome and time, so a rejected attempt is never lost when the dialog closes
- **Fully localized screens:** The receiving detail page, upload dialogs, and workflow hints are now fully in Indonesian, replacing the previous mixed English labels
