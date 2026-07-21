"use strict";
class BasePage {
    pageName;
    // Parent requires a name to be built
    constructor(name) {
        this.pageName = name;
    }
}
class DashboardPage extends BasePage {
    userRole;
    constructor(role) {
        // super() MUST be the very first line in the child constructor
        super("Dashboard"); // Passes "Dashboard" up to BasePage
        this.userRole = role; // Now we can safely use 'this' for child properties
    }
}
const dashboard = new DashboardPage("Admin");
console.log(dashboard.pageName);
console.log(dashboard.userRole);
