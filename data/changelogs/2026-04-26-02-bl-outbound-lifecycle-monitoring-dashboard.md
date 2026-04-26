---
date: "2026-04-26"
title: "BL Outbound Lifecycle Monitoring Dashboard"
repo: len-approval-ui
product:
  - web
---

- Added a new **Monitoring** section in the navigation menu with a list view and detail page for tracking BL outbound form lifecycles.
- The **list page** displays outbound forms in a table with columns for outbound number, date, status, requester, per-moda sync summaries (Booking/AWB/Manifest/DRS status badges), and last sync time. Includes filters for date range, moda, stage, status, and free-text search, with pagination.
- The **detail page** shows the full form summary and an accordion per moda containing sync status, ERP booking ID, booking status history timeline, AWB records table, manifest info, and DRS details.
- Added the lifecycle API service and response models to connect the frontend to the new backend endpoints.
- Fixed an auth bug where a failed token refresh would cause an infinite loop calling `/api/auth/revoke`. Now it clears the local auth state once and stops.
- Centralized status severity/tag color mapping into a shared utility so monitoring screens and the existing BL Outbound tracking section use consistent styling.
- Bumped UI version to `1.3.0`.
