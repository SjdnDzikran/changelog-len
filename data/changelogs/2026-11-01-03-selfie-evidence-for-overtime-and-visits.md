---
date: "2026-11-01"
title: "Require selfie and location proof for overtime and field visits"
repo: len-attendance
product:
  - backend
  - mobile
additions: 789
deletions: 182
---

Overtime and field visits now collect the same photographic and location evidence as regular attendance.

- **Selfie required for overtime:** Starting and ending an overtime session now requires a selfie photo (JPEG or PNG, up to 5 MB), matching the attendance punch rules
- **Location still verified:** When a work location has a geofence radius, the employee's coordinates are checked before the punch is accepted
- **Photo evidence for visits:** Field visits can now attach a photo of the site or meeting, stored securely and visible to the employee and their approvers
- **One-button flow:** The punch screen opens the camera and reads the location automatically as soon as it starts, so recording attendance takes a single tap
- **Clear failure handling:** If camera or location access is denied, the screen explains exactly what is missing and offers a retry once permissions are granted
