---
date: "2026-09-07"
title: "Attach PDF test reports to inventory correction requests"
repo: api-wms
product:
  - backend
additions: 654
deletions: 21
---

Tested inventory correction requests ("Pengajuan Perubahan") can now carry the PDF test result document itself, not just photos and field changes.

- **Submit, replace, or remove:** An operator can attach a new PDF, propose replacing the serial's current one, or mark the existing one for removal. Each serial holds a single PDF, so an approved replacement automatically retires the old file.
- **Approval stays the gate:** Nothing touches the official evidence until a WMS Super Administrator approves. The old document is swapped for the new one in a single safe step, and a rejection leaves the original completely untouched.
- **Review before deciding:** Approvers read the staged PDF directly in the review screen, so they can check the replacement against the original before approving.
- **Guardrails included:** Uploads are verified as real PDFs and size-limited, requests are scoped so reviewers only see their own warehouse, and rejected requests leave no leftover files in storage.
