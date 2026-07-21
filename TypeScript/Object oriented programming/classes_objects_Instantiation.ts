// The Blueprint (Class)
class LoginPage {
    // Properties (Data)
    usernameInput = "#username";
    passwordInput = "#password";

    // Methods (Actions)
    login() {
        console.log(`Typing into ${this.usernameInput}`);
    }
}

// Instantiation (Creating the actual object to use)
const myLogin = new LoginPage();
myLogin.login(); // Outputs: Typing into #username
const anotherLogin = new LoginPage();
anotherLogin.login(); // Outputs: Typing into #username