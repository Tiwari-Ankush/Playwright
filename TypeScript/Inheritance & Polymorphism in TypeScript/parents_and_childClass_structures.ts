// Parent Class (The generic template)
class BasePage {
    protected baseUrl = "https://example.com";

    openUrl(path: string) {
        console.log(`Navigating to ${this.baseUrl}${path}`);
    }
}

// Child Class (Inherits from BasePage)
class LoginPage extends BasePage {
    // Automatically possesses 'baseUrl' and 'openUrl' from the parent!
    login() {
        this.openUrl("/login"); // Using the inherited method
        console.log("Entering credentials...");
    }
}

const loginPage = new LoginPage();
loginPage.login(); 
// Output: 
// Navigating to https://example.com/login
// Entering credentials...