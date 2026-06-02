---
date: "2026-06-02"
title: "Complete Pickup Domestic form workflow with multi-step approval and Excel data entry"
repo: len-approval-api
product:
  - backend
---

Pickup Domestic Delivery forms now support a full multi-step approval workflow with Excel-based item data entry, AWB number registration, and automatic synchronization to TMS upon final approval.

- **Excel template upload for items:** Users download a template, fill in item details (box number, PO, part number, quantity, destination, etc.), and upload it in one step. The template includes dropdown validation for transport mode (Darat, Laut, Udara) and origin branch
- **Two approval flows supported:** "CJ First" flows require origin and transport mode at creation time, while "LEN First" flows allow these fields to be filled in at a later step by the LEN team. The system automatically adjusts validation rules based on the selected workflow
- **Dedicated AWB entry step:** A separate Excel template downloads all current items so users can fill in AWB numbers, weights, and dimensions. This step is restricted to the AWB Data Entry workflow step only, preventing premature edits
- **Final approval editing:** At the last approval step, approvers can edit any item field and remove items entirely, with all changes tracked and validated before saving
- **Automatic TMS sync on approval:** When a Pickup Domestic form is fully approved, AWB records are automatically created or updated in the TMS system. Transport mode and origin branch are resolved automatically, and orphaned AWB records are cleaned up if items are removed
- **Form update and delete:** Draft and Revision Requested forms can now be edited (header fields like BL number, request date, material document) or deleted entirely, giving users more control over their work-in-progress
- **My Forms integration:** Pickup Domestic forms now appear in the "My Forms" dashboard alongside other form types, so users can track and manage all their submissions from one place
