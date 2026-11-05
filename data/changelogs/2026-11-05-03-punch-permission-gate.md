---
date: "2026-11-05"
title: "Attendance check-in checks permissions before opening the camera"
repo: len-attendance
product:
  - mobile
additions: 215
deletions: 50
---

The attendance punch flow now asks for location and camera permission up front and only opens the selfie camera once both are granted, so employees get clear guidance instead of a stuck or blank camera screen.

- **Permission check first:** Tapping "Check in" verifies location access, then camera access, before navigating to the capture screen; if either is blocked, the employee sees the reason right where they tapped and can retry after fixing it, with no half-open camera or silent failure
- **More helpful error messages:** When location can't be read, the message now points to the likely causes, including browser site settings, other apps holding the camera, or floating bubbles and screen overlays that interfere with capture (available in English and Indonesian)
- **Smoother onboarding from the home screen:** The main "Check in" button on the home screen runs the whole permission sequence, shows a spinner while GPS locks on, and only then moves to the camera, so the capture screen opens ready to shoot
- **Position carried over:** The location fixed during the start step is reused on the capture screen (valid for 30 seconds), so the employee doesn't wait twice for GPS and the recorded accuracy matches what was shown
