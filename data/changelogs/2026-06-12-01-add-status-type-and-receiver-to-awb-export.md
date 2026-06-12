---
date: "2026-06-12"
title: "Add status type and receiver name to AWB export"
repo: erp-len-api
product:
  - backend
additions: 25
deletions: 15
---

The Data AWB export now includes two additional columns right after the existing "Status" field:

- **"Tipe Status" column:** Shows the latest delivery status category from the POD history (e.g., delivered, returned, in transit), so operators can see the status classification at a glance without opening individual AWB records
- **"Diterima Oleh" column:** Displays the name of the person who physically received the package, pulled directly from the latest POD entry
