---
date: "2026-06-02"
title: "Pickup Domestic creation, viewing, and final approval editing interface"
repo: len-approval-ui
additions: 206
deletions: 68
product:
  - web
---

The Approval web app now provides a full interface for creating, viewing, and approving Pickup Domestic Delivery forms, including inline editing at the final approval step.

- **Creation page with flow-aware template:** When downloading the Excel template, the selected workflow is passed to the server so the template columns match the flow type. Transport mode and origin columns are always visible in the items table for consistency
- **Final approval edit table:** Approvers at the last workflow step see an inline editing table where they can modify item details (box number, PO, destination, quantity, etc.), change or remove items, and save all changes with a single button. Deleted items are visually struck through before saving
- **Simplified item columns:** Plant and Sloc fields have been removed from all Pickup Domestic tables, streamlining the data entry experience to only the fields that matter
- **Edit permissions shown automatically:** The system detects whether the current user is at the final approval step and shows or hides the edit section accordingly, so approvers only see editing controls when they have the authority to use them
