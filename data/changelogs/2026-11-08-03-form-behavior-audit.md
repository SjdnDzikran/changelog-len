---
date: "2026-11-08"
title: "Audit every form after the redesign and fix the issues found (version 1.35.6)"
repo: erp-len-ui
product:
  - web
additions: 3913
deletions: 17
---

A full behavior audit compared every form against its pre-redesign version, covering 180 screens, more than 1,200 form controls, and 173 rendered browser states on desktop and phone. Three real issues were found and fixed:

- **Booking detail loading crash:** The booking detail page could crash while its data was still loading. Pending and failed loads now keep the page readable instead of throwing an error.
- **Saved address search resets:** While typing in the saved-recipient-address picker on AWB and Booking forms, an unrelated page refresh could wipe out the search mid-typing. The typed query now survives, and external address selections still update the field correctly.
- **Vendor and agent access stuck disabled:** In the user partner access dialogs, choosing a user did not enable the vendor or agent selection lists (an older bug, not caused by the redesign). Selecting a user now immediately enables the partner choices and saving submits the right user and partner combination.
- **No field types were lost:** The audit confirmed no dropdown or choice field was replaced by a free-text field anywhere, and read-only fields that became display cards still show all their information.
- **Regression checks in the pipeline:** The form behavior test suite now runs automatically on every pull request alongside the production build validation.
