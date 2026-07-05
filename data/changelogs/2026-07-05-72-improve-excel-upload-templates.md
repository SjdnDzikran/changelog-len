---
date: "2026-07-05"
title: "Improve Excel upload templates with dropdowns and proper number formatting"
repo: api-wms
product:
  - backend
additions: 165
deletions: 38
---

- **Dropdown validations** on the Condition (Good/Broken), Completeness (Complete/Not Complete), and Power On Test (On/Off) columns guide data entry and prevent typos when filling in upload templates
- **Numeric columns** like quantity are now real numbers in the spreadsheet, so formulas, sorting, and calculations work correctly instead of treating everything as text
- **Blank quantity cells** no longer default to zero, allowing partial data entry where quantities are filled in later
- Excel sheet names are now properly capped at 31 characters, preventing download errors on long table names
