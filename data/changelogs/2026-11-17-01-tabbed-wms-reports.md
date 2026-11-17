---
date: "2026-11-17"
title: "Tabbed layout for WMS transaction reports, plus sorting and label fixes"
repo: ui-wms
product:
  - web
additions: 516
deletions: 506
---

The Transaction and Serial Number Transaction reports now organize their tables into tabs instead of stacking them down one long page.

- **Tabbed reports:** Transaction reports now show Inbound, Outbound, Transfer, and Serial Number data as separate tabs, each with a live record count in the tab header, so the page stays compact instead of stretching through four stacked tables
- **Clearer export controls:** The Excel download section is now a collapsible "Export scope" panel labeled "Excel export sheets", so users pick exactly which sheets go into the file without the filters cluttering the toolbar, including on mobile
- **Correct column sorting:** The Capacity and Total item columns in Location Management now sort by their actual numeric values with proper sort indicators, instead of silently sorting by the description column
- **Accurate data labels:** A mislabeled "Batch" field on item rows in the Testing Report and Data WMS pages now correctly reads "UoM" (unit of measure), and quantity figures are properly spaced from their units in transaction rows
- **Polished details:** Download progress dialogs are standardized across all eight report pages, broken evidence thumbnails in Tested Inventory recover gracefully instead of showing broken images, and empty states now use consistent English wording
