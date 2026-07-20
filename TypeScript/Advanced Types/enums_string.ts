// String Enum for testing environments
enum Environment {
  DEV = "https://dev.example.com",
  STAGING = "https://staging.example.com",
  PROD = "https://example.com"
}

// Usage: You get autocomplete and guarantee you didn't misspell the URL
let currentEnv: Environment = Environment.STAGING;
console.log(currentEnv); // Outputs: "https://staging.example.com"

//run command: npx tsc enums_string.ts