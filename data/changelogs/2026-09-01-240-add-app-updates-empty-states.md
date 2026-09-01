---
date: "2026-09-01"
title: "Add helpful guidance when the app updates list is empty"
repo: erp-len-ui
product:
  - web
additions: 86
deletions: 1
---

The App Updates page now shows contextual messages instead of a blank table when there are no releases to display.

- **Empty catalog:** When no APK releases have been uploaded yet, the page shows a clear explanation and a direct "Unggah Rilis Baru" button for authorized users
- **No search results:** When a keyword search returns zero matches, a separate message is shown with a one-click "Hapus Pencarian" button to clear the filter
- **Better error feedback:** If the system fails to load the latest version information, an in-page error notification appears instead of failing silently
