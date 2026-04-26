---
date: "2026-04-26"
title: "BL Outbound Lifecycle Monitoring API"
repo: len-approval-api
product:
  - backend
---

- Added new `MonitoringController` with a `GET /api/monitoring/bl-outbound/lifecycle` endpoint that returns a paginated list of BL outbound forms with lifecycle summaries per moda (Booking, AWB, Manifest, DRS status at a glance).
- Added a detail endpoint `GET /api/bl-outbound-forms/{id}/lifecycle` that returns the full lifecycle chain for a single form, including per-moda AWB records, manifest dispatch info, DRS data, and status history for each stage.
- Extended the ERP integration layer (`ErpLenApiService` and `ErpBookingIntegrationService`) to fetch and aggregate AWB, Manifest, DRS, and status history data from TMS, mapping everything into structured lifecycle DTOs.
- Added caching support so the monitoring list avoids live ERP calls per row, instead reading pre-synced status fields from `erp_booking_links`.
- Fixed a startup crash where background workers (`EmailSendWorker`, `ErpBookingStatusSyncJob`) were incorrectly registered as scoped services by the convention-based DI auto-registration.
- Bumped API version to `1.5.0`.
