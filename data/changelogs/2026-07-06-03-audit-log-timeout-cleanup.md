---
date: "2026-07-06"
title: "Fix audit log timeouts and add automatic data cleanup"
repo: erp-len-api
product:
  - backend
additions: 80
deletions: 10
---

The audit log page was timing out because the system was counting every row in the audit table before displaying results. This has been fixed, and an automatic cleanup job has been added to keep the table manageable.

- **Page timeout eliminated:** Removed the slow full-table count query on the audit logs endpoint, replacing it with a page-size-plus-one pattern that detects whether more rows exist without scanning the entire table
- **Automatic weekly cleanup:** A background job now runs every week to delete audit records older than 180 days, preventing the table from growing indefinitely and slowing down queries
- **Longer query timeout:** Database command timeout increased from 30 seconds to 120 seconds, reducing the chance of transient timeouts on large reports
