---
date: "2026-06-03"
title: "Add form type badges to dashboard tables"
repo: len-approval-ui
product:
  - web
additions: 137
deletions: 19
---

The Recent Forms and Pending Approvals tables on the dashboard now display a colored badge for each form type, making it easy to distinguish between BL, MRN, MRF, Pickup Domestic, and other form categories at a glance without reading the form number.

- **Form Type column:** A new column in both the Recent Forms and Pending Approvals tables shows a color-coded badge with the form type name (e.g., "BL Outbound", "Pickup Domestic")
- **Mobile layout:** The form type badge also appears in the mobile card view, keeping the experience consistent across devices
- **Fixed data source:** The "Pending Forms" section on the admin dashboard was incorrectly pulling recent forms data instead of pending forms; this now displays the correct dataset
