---
date: "2026-11-01"
title: "Speed up the attendance dashboard"
repo: len-attendance
product:
  - backend
additions: 240
deletions: 155
---

The dashboard now asks the database once instead of several times, roughly halving its loading time.

- **One request instead of six:** All dashboard statistics, from daily trends to late rankings, are calculated in a single database round trip
- **Noticeably faster:** The heavy aggregation dropped from about 240ms to about 100ms per load
- **Same numbers, quicker:** No information changed; every card and chart simply appears sooner
