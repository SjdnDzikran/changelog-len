---
date: "2026-11-08"
title: "Roll out OMS visual refresh and app info panel (versions 1.35.1 to 1.35.4)"
repo: erp-len-ui
product:
  - web
additions: 861
deletions: 121
---

Four rapid-fire releases finished the OMS visual refresh and fixed the deployment issues found along the way:

- **"Tentang OMS" panel:** A new app info panel shows the full application name, current version, and release notes. Open it by clicking the version badge in the header or through the account menu, including on phones.
- **Cleaner header:** The signed-in header now shows just the OMS truck logo and a subtle interactive version badge, instead of repeating the full application name next to the company logo. Light and dark logo variants are included, with a compact layout for small screens.
- **Smoother startup screen:** The loading screen's logo animation and progress bar run much more efficiently, pausing while the tab is in the background and freeing resources as soon as the app is ready. Reduced-motion preferences still get a static screen.
- **More reliable deployments:** Production builds are now automatically validated with a full Docker build on every pull request, catching deployment-breaking issues before they reach the server. This caught and fixed two build failures that would have broken AWB and Booking forms in production.
