---
date: "2026-05-18"
title: "Add admin pages for managing packaging content"
repo: erp-len-ui
product:
  - web
---

- **Packaging list page:** A searchable, sortable table at `/cms/packagings` shows all packaging entries with color-coded status badges (Draft/Published), last modified date, and quick-action buttons for viewing, editing, publishing, unpublishing, and deleting
- **Create and edit forms:** Dedicated pages for adding new packaging and editing existing ones, with inline image upload (up to 10 MB), a live image preview, and client-side validation before saving
- **Navigation and access control:** A new "Packaging" link appears in the CMS sidebar for users with the View Packagings permission. Separate permissions control who can create, update, and delete packaging entries
