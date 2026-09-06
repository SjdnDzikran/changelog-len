---
date: "2026-09-06"
title: "Explain why an evidence PDF will not open instead of blaming the file"
repo: ui-wms
product:
  - web
additions: 88
deletions: 11
---

When an evidence PDF fails to open, the preview now reports the real cause, and a viewer that fails to load no longer stays broken for the rest of the session.

- **Honest error messages:** A failed preview now says what actually went wrong: password-protected files, damaged uploads, and a viewer that failed to load each get their own distinct message
- **No more wasted re-uploads:** Every failure used to look like "this PDF is damaged," sending operators to re-upload evidence that was perfectly fine
- **Self-recovering viewer:** A viewer that fails to load no longer stays dead until a full page reload; trying again just works
- **Easier support diagnosis:** The underlying technical cause is now recorded in the browser console, so failures in the field can be diagnosed instead of guessed at from a screenshot
