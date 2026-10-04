---
date: "2026-10-04"
title: "Dashboard maps unified and stock dots now show true totals"
repo: erp-len-ui
product:
  - web
additions: 337
deletions: 84
---

The location maps on the Network, B2B, and Channel dashboards were restyled to match the TMS dashboard, and the warehouse maps now show correct stock totals.

- **Consistent look:** Map dots now use the same green, amber, and red tones as the TMS dashboard cards, and clicking a location opens a cleaner popup card built from the same design as the dashboard panels, with the map tiles slightly muted so status colours stand out.
- **Popups in Bahasa Indonesia:** Each popup now labels what the dot represents (Gudang, Mitra, or Channel) and shows its stock status and quantity. Misleading "Last Restock Date" and "Order Fulfillment" lines that always showed today's date and 0 / 0 orders were removed; the last-updated date appears only when a real one exists.
- **Correct stock per warehouse:** The Network and B2B maps previously drew one dot per inventory row, stacking dozens of dots on each warehouse and understating its stock. Each warehouse now has a single dot sized by its total summed stock, matching how the Channel map works.
- **Graceful empty state:** When no warehouse has saved coordinates, the Network and B2B dashboards now show a clear "no locations" message instead of a blank map, and warehouses missing coordinates no longer break the page.
