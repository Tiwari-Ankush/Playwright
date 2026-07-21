// Designing an object for test credentials
const testUser = {
    username: "qa_admin",
    password: "Password123!",
    isAdmin: true,
    environments: ["DEV", "STAGING"]
};

// Accessing the data using dot notation
console.log(testUser.username); // "qa_admin"
console.log(testUser.environments[0]); // "DEV"
console.log(testUser.environments[1]); // "STAGING"
console.log(testUser.isAdmin); // true
console.log(testUser.password); // "Password123!"