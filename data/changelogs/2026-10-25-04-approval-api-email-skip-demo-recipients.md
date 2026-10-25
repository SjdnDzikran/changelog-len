---
date: "2026-10-25"
title: "Email notifications no longer fail on demo or malformed addresses"
repo: len-approval-api
product:
  - backend
additions: 338
deletions: 9
---

Approval email notifications now skip addresses that can never receive mail, instead of failing the whole delivery.

- **Demo accounts no longer cause delivery errors:** Notification emails addressed to the application's built-in demo accounts (such as @demo.test addresses) are recognized and skipped before any email delivery is attempted, removing recurring failed-delivery noise from the system
- **One bad address no longer blocks the rest:** If a notification contains a malformed address alongside valid ones, only the bad entry is skipped. Everyone else on the To, Cc, and Bcc lists still receives the email as normal
- **Cleaner handling when nobody remains:** If every recipient on an email is a demo or invalid address, the system simply skips sending it rather than erroring out, keeping approval workflows running without interruption
- **Display names preserved:** Recipients entered with display names (for example "Rina &lt;rina@company.com&gt;") are still delivered in exactly the same format as before
