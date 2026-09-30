---
date: "2026-09-30"
title: "Trip monitoring shows where vendor shipments are headed"
repo: erp-len-api
product:
  - backend
additions: 139
deletions: 5
---

Added destination information for vendor trips to the monitoring service, so dispatchers can see where goods actually go even when a trip has no destination branch of its own.

- **Destination cities per trip:** each trip now reports the top five cities/regencies its AWBs are delivered to, with the busiest destination first, plus a total count of distinct destinations.
- **Searchable by destination:** the search box on trip monitoring now also matches destination city names, so typing a city finds trips heading there.
- **Clearer overdue wording:** attention messages for long-running trips were rephrased in plainer Indonesian (for example, "more than 3 days since departure, arrival not yet recorded").
