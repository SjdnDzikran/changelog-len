---
date: "2026-11-10"
title: "Redesigned profile page with cleaner account and password cards"
repo: ui-wms
product:
  - web
additions: 650
deletions: 302
---

The WMS profile page has been rebuilt into a modern, tidy layout that works consistently across light and dark themes and on phones.

- **New look:** The old purple profile panel is replaced with clean cards in LEN blue, with a compact initials card showing the user's name, username, role badge, and read-only account details (username, full name, email, user group) in one place
- **Clearer password form:** Password change moved to its own card with independent show/hide toggles for the new password and confirmation, live feedback on length and matching, a saving indicator, and clearer validation messages
- **Safer saving:** Password updates are blocked until account data is ready and while a save is running; fields clear after success and stay available for retry after a failure
- **Works everywhere:** The layout stacks neatly on phones (down to 320 px) and adapts across all four app themes, with a retry button if account data fails to load
