---
date: "2026-10-21"
title: "Make navigation buttons behave like real links"
repo: len-attendance
product:
  - web
additions: 126
deletions: 176
---

Buttons that only navigate (Back to Home, View History, Add Employee, Open Payslip, and dozens more across employee, admin, and payroll pages) now use one consistent building block that renders a true link styled as a button.

- **Middle-click and open-in-new-tab work:** Every navigation button in the app can now be opened in a new tab or middle-clicked like any normal link.
- **Better screen reader announcements:** Navigation controls are announced as links rather than buttons, which is the correct semantics for assistive technology.
- **Consistent touch size:** The standardized buttons keep the same minimum height on mobile, so nothing shrinks or shifts.
