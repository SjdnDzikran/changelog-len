---
date: "2026-10-09"
title: "Stop accidental double dispatches at the source"
repo: erp-len-api
product:
  - backend
additions: 278
deletions: 4
---

Dispatching a manifest (marking it as departed) is now protected against being triggered twice, even when two people click at the same moment.

- **One departure only:** The system now claims the departure in a single atomic step, so a double click, two open tabs, or two users dispatching simultaneously can never send a manifest twice or corrupt its shipment statuses
- **Clear Indonesian explanations:** A manifest that already departed returns "Manifest sudah diberangkatkan dan tidak dapat diberangkatkan kembali" instead of a generic server error, and any other invalid state names the current status and asks the user to reload
- **Empty manifests rejected cleanly:** Trying to dispatch a manifest without any AWBs gets a friendly conflict message ("add at least one AWB first") instead of an internal error
