---
date: "2026-11-11"
title: "Bring back the animated sidebar avatar"
repo: len-attendance
product:
  - web
additions: 28
deletions: 5
---

The sidebar avatar's idle animation is back on every admin page, without slowing the dashboard down.

- **Always alive:** The sidebar avatar resumes its gentle breathing and bobbing animation at all times, instead of only when hovered
- **No performance cost:** The animation now runs on its own graphics layer with a capped frame rate, so the dashboard map and other heavy visuals are unaffected
