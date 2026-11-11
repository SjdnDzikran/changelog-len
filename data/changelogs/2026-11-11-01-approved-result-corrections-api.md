---
date: "2026-11-11"
title: "Approve test-result corrections with stock protection"
repo: api-wms
product:
  - backend
additions: 779
deletions: 8
---

Correction requests for tested serial numbers can now cover the recorded test results, with strict safeguards so approvals never disturb physical stock.

- **Correct recorded results:** Approval requests can now fix the Condition (Good, Broken, Faulty), Completeness (Complete, Not Complete), and Power On Test (On, Off) of tested serial numbers, alongside the existing serial number, MAC, remark, photo, and document corrections
- **Live stock stays safe:** An approved correction only updates live stock when the unit is still sitting unchanged on its rack; anything that has moved, been reserved, been retested, or shipped out receives a history-only correction, so quantities, locations, and availability status are never overwritten
- **Everything rechecked at approval:** When a reviewer approves, the system re-verifies the serial, its rack location, and the recorded results at that exact moment; stale requests are rejected with a clear message instead of being half-applied, and the whole approval rolls back if any step fails
- **Super admin gate unchanged:** Only WMS Super Administrators can approve or reject these corrections, same as before, and regular stock disposition choices during resolve are untouched
