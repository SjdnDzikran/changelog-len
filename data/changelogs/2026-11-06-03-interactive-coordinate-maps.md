---
date: "2026-11-06"
title: "Open interactive maps for punch and geofence locations"
repo: len-attendance
product:
  - web
additions: 3262
deletions: 62
---

Attendance records and warehouse locations that carry GPS coordinates now show a real interactive map instead of raw numbers and an external link.

- **Maps on attendance details:** Opening any attendance record or overtime detail now draws a small map marking exactly where the employee clocked in and out, with each point labeled and still carrying a one-click link to open the same spot in Google Maps
- **Geofence previews for locations:** The location drawer now shows the warehouse's allowed clock-in area drawn as a circle on the map around its centre point, and while editing a location the map updates live as the latitude, longitude or radius numbers are typed
- **Loads only when needed:** The map only downloads when someone actually opens a screen with coordinates, keeping the app's opening speed unchanged for everyone else
- **Fails gracefully:** If the map cannot load (for example on a device without graphics support), the coordinate rows and Google Maps links still appear; nothing else on the page is affected
