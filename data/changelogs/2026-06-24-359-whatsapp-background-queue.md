---
date: "2026-06-24"
title: "Make form submit and approval instant by sending WhatsApp notifications in the background"
repo: len-approval-api
product:
  - backend
additions: 340
deletions: 133
---

- **Instant form responses:** Submitting and approving forms no longer waits for WhatsApp messages to finish sending, cutting response time from roughly 5 seconds to instant
- **Background queue:** All WhatsApp notifications are now handled by a dedicated background worker, so the system continues sending messages even after the user's page has already responded
- **Covers every notification type:** The improvement applies across all form types, including approval requests, approval outcome alerts, and acknowledgment reminders
