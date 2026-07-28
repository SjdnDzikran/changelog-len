---
date: "2026-07-28"
title: "Show expiry countdown on pending approval requests at a glance"
repo: len-approval-ui
product:
  - web
additions: 257
deletions: 10
---
- **Countdown badges:** The approval queue and My Pending Forms lists now display a small countdown badge (e.g., "3d left", "5h left") next to each request, so approvers can immediately see which items need urgent attention
- **Urgency coloring:** Badges change color based on time remaining: neutral for requests with more than 48 hours, amber under 48 hours, red under 12 hours, and grey with strikethrough for expired requests
- **Hover for exact time:** Hovering over any badge reveals the exact expiry timestamp
- **No clutter for non-expiring forms:** Form types that do not have an expiry (Pickup & Delivery, MRN Request, MRF) show no badge at all
