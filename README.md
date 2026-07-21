
TYPESCRIPT:
npx tsc filename.ts - to compile ts file to js
node filename.js - to run the compiled file.


PLAYWRIGHT:

npx playwright test

to run specific test file -
npx playwright test login.spec.ts

if file is inside directory:
npx playwright test tests/Playwright_Kick_start/login.spec.ts

with head execution: 
npx playwright test tests/Playwright_Kick_start/login.spec.ts --headed

run only for chrome: 
npx playwright test tests/Playwright_Kick_start/login.spec.ts --project="Google Chrome"

run only for edge:
npx playwright test tests/Playwright_Kick_start/login.spec.ts --project="Microsoft Edge"

To view report of latest tests run - 
npx playwright show-report
