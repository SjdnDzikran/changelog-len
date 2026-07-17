---
date: "2026-07-17"
title: "Add XL Smart Customer role with read-only dashboard and restricted menu"
repo: ui-wms
product:
  - web
additions: 144
deletions: 7
---

**Restricted sidebar menu:** XL Smart Customer users now see only four menu items: Dashboard, Inventory Under Restriction, Tested Inventory, and Data WMS. All operational menus such as inbound, outbound, and delivery management are hidden, matching their read-only access level.

**Trimmed dashboard view:** A dedicated XL Smart dashboard has been created that shows only inventory-related statistics, tested inventory breakdowns, and material-by-vendor charts. Operational widgets for inbound, outbound, delivery, and shipments are removed to keep the view focused on what XL Smart needs.

**Read-only controls:** The green "Send to Test" button on the Inventory Under Restriction page is now hidden for XL Smart users, preventing accidental warehouse operations from a read-only account.

**Profile menu added:** XL Smart users can now access their profile page from the sidebar, matching the menu available to other roles.
