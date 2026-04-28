---
date: "2026-04-28"
title: "Modal forms now display validation errors via MudAlert"
repo: erp-len-ui
product:
  - web
---

Improved the Create User modal and all entity edit modals to properly display client-side validation errors.

Previously, the generic `<ValidationSummary>` component rendered validation errors as an unstyled HTML list that was difficult to notice. The modal has been updated to collect all `DataAnnotations` and `IValidatableObject` validation results into a styled `MudAlert` error banner that appears at the top of the form when invalid input is detected.

Errors are now displayed prominently with red alert styling, making it immediately clear to users what needs to be corrected before the form can be submitted.
