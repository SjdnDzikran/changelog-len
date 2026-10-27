---
date: "2026-10-27"
title: "Automated attendance deployment to the VPS"
repo: len-attendance
product:
  - backend
additions: 409
deletions: 2
---

- **One-click releases:** Merging to master now builds, tests and ships the attendance application to the server automatically, with a health check before it goes live.
- **Safe rollouts:** If a database upgrade or health check fails, the previous version is restored automatically and the running service is never replaced by a broken build.
- **Live on the company domains:** The app is reachable at absensi.lenlogistics.co.id with its API at absensi-api.lenlogistics.co.id, secured with HTTPS.
