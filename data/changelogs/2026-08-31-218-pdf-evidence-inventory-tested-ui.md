---
date: "2026-08-31"
title: "Upload and view PDF evidence in Tested Inventory pages"
repo: ui-wms
product:
  - web
additions: 684
deletions: 43
---

- **PDF column in Tested Inventory:** The per-S/N evidence column now shows an uploaded PDF alongside photo thumbnails, with a file-name link to open it and a delete button to remove it
- **PDF attachment in resolve dialog:** When resolving or saving a draft, operators can attach a new PDF test result directly from the modal, with pending uploads clearly marked in amber until saved
- **Evidence must upload first:** Photos and PDFs are uploaded to the server before the stock result is saved, so a failed upload blocks the mutation and keeps the dialog open for retry instead of creating incomplete records
- **Photo limit reduced to 3 per serial number:** New uploads are capped at three photos per S/N, though legacy photos beyond that count remain visible and deletable
- **Draft save for non-admins:** Operators who can add serial numbers but cannot resolve stock now see a "Save as Draft" button, letting them record evidence before an admin performs the final resolve
