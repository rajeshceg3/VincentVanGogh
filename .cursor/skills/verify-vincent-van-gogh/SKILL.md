# Verify VincentVanGogh
Vincent van Gogh - A Lived Canvas: cinematic scroll biography (vite + React).
## Launch
npm install, then npm run dev or npm run build && npm run preview.
## Doctor
`python3 .cursor/skills/verify-vincent-van-gogh/verify.py`
## Drive
Builds with vite and renders the built app in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-vincent-van-gogh/evidence.json`
## Cleanup
Static server terminated after the render.
## Known boundaries
Render smoke only; scene quality and e2e suites (cypress/playwright/puppeteer) not exercised here.
