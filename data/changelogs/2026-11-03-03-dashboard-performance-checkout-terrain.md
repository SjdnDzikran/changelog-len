---
date: "2026-11-03"
title: "Admin dashboard loads up to 5x faster and shows check-out patterns"
repo: len-attendance
product:
  - backend
additions: 679
deletions: 266
---

**Much faster dashboard:** The admin attendance dashboard now computes all of its statistics in a single pass instead of many database queries, cutting the typical page load from around half a second to about 100 milliseconds (95% of requests under 200 ms, verified against staging data with 132 employees and 1,400+ attendance records).

**Check-out times on the map:** The 3D activity terrain chart that previously showed only check-in patterns now has a Check-ins / Check-outs toggle, so managers can see when the team actually goes home, not just when they arrive. Check-out hours are shown in a distinct green color scheme.

**Same live data, no caching:** All figures still reflect live attendance and permissions with every load; nothing is cached or stale. Filter by location and position works identically on both chart series.
