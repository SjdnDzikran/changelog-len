---
date: "2026-06-04"
title: "AWB prints and WhatsApp POD notifications now show who entered the data"
repo: erp-len-api
product:
  - backend
additions: 25
deletions: 16
---

- **Print footer update:** AWB documents now display "Diinput oleh" with the name of the person who last modified the record, replacing the previous static "Create by" field that only showed the original creator
- **WhatsApp POD includes input by:** Proof of delivery WhatsApp notifications now include the name of the person who entered the POD data, so recipients know exactly who handled the delivery confirmation
