---
date: "2026-11-13"
title: "Fix attendance punch times and statuses, then repair historical records"
repo: len-attendance
product:
  - backend
additions: 421
deletions: 61
---

**Timezone fix for punch times:** Check-in and check-out times are now always recorded in the attendance timezone instead of the server's clock, so punch times, work dates and late/early statuses stay correct no matter where the server runs.

- **Consistent late/early rules:** Admin-recorded and kiosk punches now get the same late/early departure status as employee self-service punches; previously every admin and kiosk punch was automatically marked "ontime", which could hide lateness
- **Automatic data repair:** A repair tool fixes all historical attendance rows written before this fix, converting stored times to the correct timezone and recomputing admin/kiosk statuses. It previews every change first (dry run by default) and can be re-run safely
- **Accurate monthly summaries:** Monthly attendance totals and payroll statements now count only days up to today in the current month, so an unfinished month no longer shows remaining working days as absences, and future months tally to zero
- **Payroll guardrails:** Payroll runs can no longer be created or approved for a month that has not fully ended, preventing frozen statements that would immediately become wrong
