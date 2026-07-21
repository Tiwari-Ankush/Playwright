//Sometimes you want a property to be visible, but you want to guarantee its value never changes after it is first set up. The readonly keyword locks the property down. It can only be assigned a value when you declare it, or inside the class constructor (the setup function that runs when you say new).

class Dashboard {
    // This can never be modified after the object is created
    readonly route = "/dashboard";
    
    // You can combine modifiers!
    private readonly timeout = 5000; 

    navigate() {
        // this.route = "/home"; // TS ERROR: Cannot assign to 'route' because it is a read-only property.
        console.log(`Going to ${this.route}`);
    }
}

const dashboard = new Dashboard();
dashboard.navigate(); // Output: Going to /dashboard