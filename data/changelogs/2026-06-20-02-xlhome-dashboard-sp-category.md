---
date: "2026-06-20"
title: "Show Spare Parts inventory separately on XLHome dashboard"
repo: api-wms
product:
  - backend
additions: 2516
deletions: 95
---

- **Spare Parts inventory card:** A new "SP" inventory count now appears on the XLHome dashboard, showing total stock classified as Spare Parts alongside the existing WMS and Non-SAP counts
- **Accurate Non-SAP classification:** Non-SAP inventory is now determined by a dynamic configuration table instead of a hardcoded value, so the dashboard correctly reflects actual Non-SAP stock even when storage location mappings change
- **Admin-managed mappings:** Both Non-SAP and Spare Parts classifications are configured through Management > Referensi, giving admins control over category assignments without requiring code changes
