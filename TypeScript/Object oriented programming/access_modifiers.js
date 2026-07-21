"use strict";
class BasePage {
    pageTitle = "My App";
    internalId = "12345";
    urlEnv = "staging";
}
const page = new BasePage();
console.log(page.pageTitle); // Allowed!
console.log(page.internalId); // TS ERROR: Property 'internalId' is private.
console.log(page.urlEnv); // TS ERROR: Property 'urlEnv' is protected.
