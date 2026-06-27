---
date: "2026-06-27"
title: "Editable REQ number field on BL Inbound and Pickup Domestic forms"
repo: len-approval-ui
product:
  - web
additions: 164
deletions: 47
---

- **Always visible:** The REQ Number field now appears as soon as a form flow is confirmed, rather than only after the first save
- **Auto-preview:** When a new BL Inbound or Pickup Domestic form is started, the next REQ number is fetched and shown automatically in the field
- **Editable before save:** Users can keep the auto-generated number or type a custom one. After saving, the field becomes read-only to prevent accidental changes
- **Consistent naming:** All labels across BL Inbound, BL Outbound, and Pickup Domestic create and view pages now display "REQ Number" instead of "ETR Number"
