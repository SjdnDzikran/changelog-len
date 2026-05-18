---
date: "2026-05-18"
title: "Show live packaging content on the Activity page"
repo: len-react
product:
  - web
---

- **Dynamic packaging section:** The packaging showcase on the Activity page now loads live data from the CMS API instead of using static images. When admins publish new or updated packaging, the website reflects the changes immediately
- **Skeleton loading state:** A placeholder animation with three pulsing cards appears while packaging data is being fetched, so visitors always see a structured layout
- **Graceful empty state:** If no packaging has been published yet, a friendly message invites visitors to check back soon instead of leaving a blank section
