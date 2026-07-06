---
date: "2026-07-06"
title: "Redesign search across all pages with debounced input and loading indicators"
repo: erp-len-ui
product:
  - web
additions: 1777
deletions: 706
---

Every search bar across the TMS application has been rebuilt with a consistent, modern experience: debounced input that waits for the user to stop typing before searching, a visible loading spinner while results load, and protection against overlapping search requests.

- **Consistent search component:** All 29 list pages, including AWB, Booking, Manifest, DRS, Inventory, Products, Warehouses, and more, now use the same search input with built-in debounce, clear button, and Enter-key shortcut
- **Visible loading overlay:** A semi-transparent overlay with a spinning icon appears over the data table while search results are loading, so users always know the system is working
- **Debounced typing:** The search waits 600ms after the user stops typing before sending a request to the server, reducing unnecessary load and improving responsiveness on slower connections
- **No more stuck spinners:** Fixed a bug where the loading overlay could remain on screen after results finished loading, ensuring the indicator always disappears correctly
- **Race condition protection:** Rapid-fire searches no longer produce conflicting results, as outdated requests are silently discarded in favor of the most recent one
