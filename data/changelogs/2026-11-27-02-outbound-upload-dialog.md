---
date: "2026-11-27"
title: "Bring the outbound upload dialog to the warehouse web app"
repo: ui-wms
product:
  - web
additions: 963
deletions: 199
---

The outbound detail page now uses the same background upload experience the inbound page already has, and the upload dialog itself was extended to cover outbound files.

- **Upload from the outbound page:** a new "Unggah data Outbound" button opens the background upload dialog on the outbound detail page; the file is checked and saved on the server while staff keep working, with a progress indicator in the page's next-step box
- **Outbound-specific results:** the results screen shows outbound group details such as requested quantity versus total delivered per group, stock shortfall figures, and the outbound key columns, so the report reads correctly for outbound work rather than reusing inbound wording
- **Automatic fallback:** if the server has not switched the outbound background upload on yet, the page silently keeps using the existing upload dialog, so nothing breaks during rollout
- **Consistent wording:** upload dialogs and Inbound/Outbound detail pages now consistently use "Inbound", "Outbound", "Template", and "Draft" instead of mixed older terms
- **Small fixes:** removed a black focus frame left after clicking tabs with the mouse, and long values in the problem list now wrap inside their column instead of pushing the explanation out of view
