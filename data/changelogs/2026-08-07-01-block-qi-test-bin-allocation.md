---
date: "2026-08-07"
title: "Prevent quality inspection stock from bypassing the proper test workflow"
repo: api-wms
product:
  - backend
additions: 72
deletions: 1
---

- **Blocked invalid receiving path:** Quality inspection stock can no longer be received directly into a registered Test Bin. Previously, operators could accidentally allocate QI stock straight into a Test Bin, which would mark the items as "On Test" in the system but without ever creating the required Tested Inventory document. This left the batch permanently stuck and untestable through the normal workflow.
- **Clear operator guidance:** When the system detects this scenario, it now rejects the allocation and displays a message in Indonesian naming the specific bin that caused the conflict. The message instructs the operator to first receive the stock into a normal QI storage bin, then send it to test through the dedicated "Send to Test" menu.
- **Consistent across warehouse workflows:** The protection applies to both the standard and XLHome inbound processes, so the same data integrity rule is enforced regardless of which warehouse module the operator is working in.
