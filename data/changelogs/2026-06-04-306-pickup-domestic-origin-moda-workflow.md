---
date: "2026-06-04"
title: "Fix Pickup Domestic and BL Inbound Origin/Moda workflow end-to-end"
repo: len-approval-api
product:
  - backend
  - web
additions: 608
deletions: 243
---

- **Validation follows who starts the flow:** Forms initiated by CJ teams require Origin and Moda before submission, while forms initiated by LEN teams defer those fields to a later workflow step. Previously, validation rules were tied to step names and could block or allow the wrong flows
- **Step-appropriate Excel templates and upload routing:** Downloaded templates now show only the columns relevant to the current step (e.g., Origin/Moda templates include Quantity and Destination but omit dimensions), and uploading on a pending form correctly routes through the Origin/Moda handler instead of the draft item path
- **Approval queue shows the right action:** Pickup Domestic forms waiting at the CJ Origin Moda Entry step now display "Selesaikan Data Entry" instead of the normal approve button, so approvers see the correct action for the current step
- **Final approval edits no longer erase data:** When an approver edits a single field on a Pickup Domestic item (such as Remark), the save only updates that field. Previously, editing one field would erase all other untouched values including Box Number, PO No, Origin, and Moda
- **Origin/Moda controls on the detail page:** Pickup Domestic form pages now show Download Template, Upload Excel, and Save buttons for Origin/Moda data when the user is at the relevant step, and table columns appear or hide based on what the step requires
