---
date: "2026-06-03"
title: "Fix LEN First form Excel validation"
repo: len-approval-api
product:
  - backend
---

Excel uploads for LEN First workflows no longer incorrectly reject rows that are missing Origin or Moda values. In the LEN First process, those fields are intentionally left blank because the CJ operations team fills them in during a later step. The system was previously blocking these uploads with validation errors.

- **No false rejections on LEN First uploads:** Origin and Moda validation is skipped when the workflow is identified as "LEN First", allowing operators to upload item data without pre-filling transport details
- **Accurate flow detection:** The system now identifies LEN First flows by checking the step name, which correctly distinguishes them from CJ First flows that require all fields upfront
- **Blank cells allowed in Moda dropdown:** Empty cells in the Moda column no longer trigger a validation error popup in Excel, reducing friction when filling out templates
