const testResults = ["Pass", "Pass", "Skipped", "Critical Failure", "Pass"];

for (const result of testResults) {
    if (result === "Critical Failure") {
        console.log("Halting test suite execution.");
        break; // Exits the loop entirely
    }
    
    if (result === "Skipped") {
        continue; // Skips to the next item without running the code below
    }
    
    console.log(`Processing result: ${result}`);
}