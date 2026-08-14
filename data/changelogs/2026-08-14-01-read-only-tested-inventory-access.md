---
date: "2026-08-14"
title: "Give monitoring users full access to Tested Inventory"
repo: ui-wms
product:
  - backend
  - web
additions: 831
deletions: 42
---

**Page no longer crashes for read-only users:** Accounts with monitoring-only access (Guest, XL Smart) can now open the Tested Inventory page without errors. Previously, the page would fail to load because the server blocked two data requests that every row on the Per S/N grid needs: photo thumbnails and correction status. The browser interpreted the blocked responses as a connectivity outage rather than a permission issue, so the page showed a confusing "Tidak terkoneksi dengan API service" message instead of the actual data.

**New read-only detail view:** Monitoring users get a dedicated view-only dialog to inspect the serial numbers behind each material group. The dialog shows saved serials, their test status (Tersimpan or Teruji), metadata (vendor, product type, site), and how many slots are still waiting for serial numbers. It contains no input fields, save buttons, or edit controls, keeping warehouse data safe from accidental changes.

**Consistent access control:** Both monitoring roles (Guest and XL Smart) now have the same level of read access across the entire Tested Inventory section. Previously, one role could see photos while the other could not, leading to confusing partial access where two different monitoring accounts had different capabilities. A single access constant now ensures both roles are always granted or denied together.

**All write actions stay locked down:** Photo uploads, correction submissions and approvals, the approval queue, and every data entry operation remain restricted to operator and admin roles. Only the viewing endpoints were opened, and the frontend already hides every write action from monitoring users, so the UI and the server now agree on what these accounts can do.
