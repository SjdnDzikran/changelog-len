---
date: "2026-05-27"
title: "Paginated audit logs with search, filters, and visual diff view"
repo: erp-len-ui
product:
  - backend
  - web
---

**Server-side pagination:** Audit logs now load page by page from the server instead of all at once (previously capped at 250), keeping the page responsive even as the log history grows

**Keyword search:** Type a search term to filter logs by action type, entity name, or optionally search within the old and new values of each change

**Date range filter:** Pick a start and end date to narrow down logs to a specific period, useful for reviewing activity during a particular shift or incident

**User identity:** Each log entry now shows the full name of the person who made the change, making it easy to identify who did what without cross-referencing user IDs

**Visual diff view:** Expanding a log entry reveals a before/after comparison table that highlights exactly which fields changed, with old values shown in amber and new values in green

**Colored action chips:** Each log entry is tagged with a color-coded chip (green for create, amber for update, red for delete) so the type of change is visible at a glance

All labels on the page are now in Bahasa Indonesia.