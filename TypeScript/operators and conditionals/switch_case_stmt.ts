let browserName: string = "webkit";

switch (browserName) {
    case "chromium":
        console.log("Running tests on Google Chrome / Microsoft Edge");
        break; // Exits the switch block
    case "firefox":
        console.log("Running tests on Mozilla Firefox");
        break;
    case "webkit":
        console.log("Running tests on Apple Safari");
        break;
    default:
        // Runs if no cases match
        console.log("Unknown browser specified. Falling back to Chromium.");
        break;
}