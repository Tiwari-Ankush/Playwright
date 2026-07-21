class BasePage {
    public pageTitle = "My App";
    private internalId = "12345";
    protected urlEnv = "staging";
}

const page = new BasePage();
console.log(page.pageTitle); // Allowed!
// console.log(page.internalId); // TS ERROR: Property 'internalId' is private.
// console.log(page.urlEnv); // TS ERROR: Property 'urlEnv' is protected.