---
date: "2026-11-06"
title: "Redesign the notification bell with a modern pop-up panel"
repo: len-attendance
product:
  - web
additions: 735
deletions: 85
---

The notification bell in the app header has been rebuilt as a polished pop-up panel that appears right where you click, for both employees and admins.

- **Slick new panel:** Clicking the bell now opens a modern notification panel beside it instead of a full side drawer, showing the unread count with an animated counter, tabs for All and Unread, and a one-click "Mark all as read" action
- **Mark items read inline:** Rows expand to reveal a "Mark as read" button, and the unread badge updates instantly even before the server confirms, so the panel never flickers or loses your place
- **Works everywhere:** The panel adapts to light and dark themes, closes with the Escape key, matches the size of the other header buttons, and works on phones
- **Admins included:** Admin accounts can now receive in-app notifications too; previously the system silently dropped notifications addressed to an admin
- **Clear failure states:** If the notification list fails to load, the panel shows a message with a Try again button instead of appearing stuck or empty
