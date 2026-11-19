---
date: "2026-11-19"
title: "Harden len-attendance security, reliability, and release checks"
repo: len-attendance
product:
  - backend
  - web
additions: 39280
deletions: 7802
---

A large quality and safety pass across the attendance platform, covering the backend service and the web app. The user-visible wins:

- **Sign-out now behaves consistently:** Deactivating an employee or admin account, resetting their password, or removing their device signs them out of every session immediately and reliably, so a deactivated account can never keep using the app. Anyone locked out by a 404-style edge case is now signed out cleanly instead of being stuck.
- **Brute-force protection on sign-in:** Repeated failed logins or password-reset attempts from one location for one account are temporarily blocked with a wait time, protecting employee accounts against password guessing.
- **Leave quotas can no longer be overspent:** Leave and permit requests now check overlapping dates and remaining quota atomically at approval time, so two approvals racing at the same moment can never approve more days than the employee's entitlement allows.
- **Kiosk refinements:** A kiosk bound to a specific location now only punches employees assigned to that location, a repeat badge scan within 60 seconds replays the original punch instead of double-punching, and the badge is held back only when a punch's outcome is genuinely unknown.
- **Server-trusted time and dates:** Attendance days, times and statuses now come from the server's clock and the company's attendance timezone instead of trusting each phone's device clock, so late marks and monthly summaries stay accurate even when a device's clock is wrong.
- **Clearer errors and steadier pages:** Form fields show server validation messages inline and take focus, page failures offer an in-place retry, photos attached to punches are no longer lost when a write's outcome was uncertain, PDF export no longer fails on emoji, and every request gets a timeout with a localized "request timed out" message.
- **Much tougher release checks:** New automated checks now verify every feature against a real throwaway database in CI, run end-to-end browser tests on desktop and mobile layouts, verify cross-tab sign-out behavior, and continuously audit dependencies for updates and known vulnerabilities before anything reaches production.
