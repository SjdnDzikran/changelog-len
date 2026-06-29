---
date: "2026-06-29"
title: "Redesign BL Outbound creation page with streamlined stock picker and Bahasa validation"
repo: len-approval-ui
product:
  - web
additions: 661
deletions: 494
---

- **Card-based layout:** The outbound creation page now follows the same clean section structure as the BL Inbound form, with fields organized into clear card groups (approval flow, general info, stock items) instead of the previous two-column layout
- **Searchable AWB selector:** The stock picker dialog replaced its manual text filters with a searchable dropdown, so users can quickly find and select an AWB number instead of typing and pressing search
- **Select All and Copy to Excel:** A checkbox in the stock picker table header selects all visible items at once, and a new "Copy to Excel" button copies the filtered inventory data as tab-separated values that paste directly into spreadsheet templates
- **Draft-first workflow:** Users can now save a draft without adding any stock items first. Placeholder buttons for "Download Template" and "Upload Excel" appear on the create page with a guide banner, activating once a draft is saved
- **Cleaner form:** Removed the "Requested By" and "Outbound Note" fields since the requestor is already tracked in audit trails and the Remark field covers notes. The submit button now reads "Submit" instead of "Submit for Approval"
- **Hidden number spinners:** Browser up/down arrows on quantity and dimension inputs are hidden, giving more horizontal space and a tidier look
- **Bahasa validation messages:** All form validation alerts, including missing item warnings and flow selection prompts, now display in Bahasa Indonesia instead of English
