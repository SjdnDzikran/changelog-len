---
date: "2026-10-03"
title: "Open the notification bell faster, with a cleaner look"
repo: erp-len-ui
product:
  - backend
  - web
additions: 770
deletions: 312
---

The notification bell now opens quickly and matches the dashboard's panel style, even as notification history grows.

- **Opens faster every time:** The list loads instantly on repeat clicks and refreshes in the background, and the page no longer counts the entire notification history just to show the first ten, so the bell stays snappy as records pile up
- **Keeps up with growth:** New database indexing and a leaner query mean the bell, unread count and "mark all read" stay fast even though every shipment status change adds notifications and none are ever deleted
- **New look:** The popup matches the TMS dashboard panels with category icons, shaded unread rows, coloured Urgent/High tags and tinted status words, plus a shimmer loading state and a friendlier empty message
- **Fairer ordering:** Read Urgent and High notifications no longer stay pinned at the top forever; once read, they take their place by date like everything else
