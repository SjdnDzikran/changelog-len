---
date: "2026-11-10"
title: "Search boxes on every admin list page"
repo: len-attendance
product:
  - web
additions: 3336
deletions: 1696
---

Every admin list page in the attendance app gained a free-text search box, along with a stronger quality gate for releases.

- **Find any record fast:** Admins can now search across attendance overview, leave requests, permits, overtime, visits, work reports, salaries, payroll runs, leave entitlements and back-office accounts, matching employee name, employee ID, location, reason, type or role depending on the page
- **Server-side search:** Results filter on the server while you type, so large employee lists stay fast; pages without a search term behave exactly as before
- **Release quality gate:** A required CI check now runs backend and frontend tests plus render-budget and code-reuse audits on every pull request before deployment, so broken or regressed builds can no longer reach production
