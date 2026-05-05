---
date: "2026-05-01"
title: "AWB list filters are now preserved when returning from detail, edit, or request-edit pages"
repo: erp-len-ui
product:
  - web
---

Users who filter the AWB list (by search keyword, status, date range, period, or customer) will no longer lose their filters when they open a record and navigate back. Previously, clicking the back button from any AWB detail, edit, or request-edit page would reset all filters, forcing users to re-enter them every time.

The AWB list page now encodes its active filter state into the URL and passes it as a `returnUrl` parameter when navigating to detail or edit pages. When the user finishes viewing or editing and clicks back, the original filtered URL is restored, including all search terms, status selections, and date ranges. The `returnUrl` is validated against an allowlist to prevent open redirect vulnerabilities.

- **View AWB**: back navigation restores the exact filtered list view the user came from
- **Edit AWB**: after saving changes or canceling, the list reloads with the same filters
- **Request Edit AWB**: same filter preservation applies when returning from the edit request flow
- All filter parameters (`search`, `status`, `customer`, `period`, `from`, `to`) survive the round-trip
