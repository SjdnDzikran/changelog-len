---
date: "2026-05-18"
title: "Add packaging content management with draft and publish workflow"
repo: erp-len-api
product:
  - backend
---

- **New Packaging CMS module:** Admins can create, edit, and delete packaging entries with a title (up to 100 characters), a short description (up to 255 characters), and one uploaded image
- **Draft and publish workflow:** Packaging entries start as drafts. Before publishing, the system validates that the title, description, and image are all provided, showing clear Indonesian-language error messages if anything is missing
- **Public API for company website:** Published packaging is served via a paginated endpoint, sorted by newest publish date, ready for the company profile frontend to display in a card or grid layout
