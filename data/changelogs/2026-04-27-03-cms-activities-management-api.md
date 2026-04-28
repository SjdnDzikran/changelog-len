---
date: "2026-04-27"
title: "CMS Activities Management API"
repo: erp-len-api
product:
  - backend
---

Added a complete backend module for managing company activities (news, events) for public listing on the website. Includes:

- Full CRUD endpoints with draft/publish workflow
- Image upload via Azure Blob Storage with format validation
- Public paginated endpoint for published activities (no auth required)
- New SQL table `erp_cms.Activities` with status and publish date tracking
- Role-based permissions for View, Search, Create, Update, and Delete
