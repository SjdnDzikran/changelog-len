---
date: "2026-09-30"
title: "Run AWB uploads in the background with pause and resume"
repo: erp-len-ui
product:
  - web
additions: 1619
deletions: 734
---

Rebuilt the AWB upload page so large files save in the background while staff keep working, and interrupted uploads recover instead of starting over.

- **Runs in the background:** once saving starts, users can move to other pages; a progress indicator in the corner of the screen keeps showing the percentage and live counts of saved, skipped, and failed rows.
- **Stop and resume:** uploads can be stopped on purpose, and if the connection drops, a Continue button picks up exactly where it left off without re-saving what is already done.
- **Repeat confirmation:** when rows look identical to shipments created in the last day, they are flagged and skipped by default so AWBs are not duplicated; a checkbox lets the user confirm they really are separate parcels and save them anyway.
- **Quick error recovery:** after the upload finishes, one download delivers an Excel of only the failed rows with the reasons attached, ready to fix and re-upload.
- **Clearer flow:** the page now walks through three visible steps (choose file, review contents, save), with drag-and-drop and a pre-upload review that shows what is ready, what will be skipped, and what needs fixing.
