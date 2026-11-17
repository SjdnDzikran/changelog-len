---
date: "2026-11-17"
title: "Dark mode and accessibility polish across the TMS web app"
repo: erp-len-ui
product:
  - web
additions: 461
deletions: 276
---

Two consecutive releases (UI 2.0.17 and 2.0.18) make the web app easier to use in dark mode and friendlier for keyboard and screen reader users.

- **Readable dark mode dialogs:** Cancel buttons in confirmation, logout, status remark, mode change, and notification dialogs now show readable text and a visible hover state in dark mode, and text inputs and textareas use proper theme surfaces instead of hard-coded light colors
- **Full keyboard access:** Notification rows on the home layout and the notification center can now be opened with Enter or Space, every action button works correctly with the Tab key, and the public AWB tracking page's proof-of-delivery photos are keyboard-focusable with a visible focus ring
- **Screen reader labels:** Icon-only buttons (table row actions, refresh, notification actions, theme manager) and form fields in the notification filters now announce their purpose, and decorative icons are hidden from screen readers
- **Reduced motion support:** All animations across dialogs, notifications, search fields, and photo pickers respect the user's "reduce motion" system setting
