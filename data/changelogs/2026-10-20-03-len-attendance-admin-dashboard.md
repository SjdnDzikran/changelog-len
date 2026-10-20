---
date: "2026-10-20"
title: "New admin attendance dashboard with trends and location breakdown"
repo: len-attendance
product:
  - backend
  - web
additions: 3225
deletions: 1
---

Admins get a new attendance dashboard that turns daily punch data into an at-a-glance overview:

- **Daily snapshot:** Key numbers for the selected date: employees checked in, late arrivals, scheduled employees who have not checked in, and approved leave plus permits, each with a sparkline showing the recent trend.
- **Trend charts:** A stacked daily chart splits check-ins into on time, late, and unclassified, so attendance patterns over the chosen 7, 14, or 30-day period are visible at once. A second chart tracks follow-up items: people who have not checked in and approved time away.
- **Arrival punctuality:** The on-time share of everyone who checked in, shown as a percentage with a breakdown bar. If nobody has checked in yet, the dashboard says so instead of showing a misleading 0%.
- **Attendance by location:** A ranked list of locations by attendance, clickable to jump straight to that location's attendance page.
- **Flexible scope:** Pick the end date, trend period, and filter by location or position; everything is reflected in the page address so views can be shared. The pending review queues for leave, permits, and overtime stay live alongside the dashboard.
- **Honest numbers:** Holidays are flagged (national holidays take precedence over weekly ones), overlapping leave requests never count an employee twice, and the dashboard never invents an absence count.
