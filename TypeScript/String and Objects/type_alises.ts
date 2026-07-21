// A type is much more flexible. While it can define the shape of an object, it can also define Unions (string | number), Tuples, and basic primitives. However, once a type is created, it cannot be reopened and changed.

// Type can do objects (like an interface)
type BrowserConfig = {
    headless: boolean;
};

// But Type can ALSO do things interfaces cannot do (like Unions)
type PlaywrightLocator = string | number;
type Coordinates = [number, number];

const config: BrowserConfig = {
    headless: true
};

const locator: PlaywrightLocator = "button";
const coords: Coordinates = [10, 20];
console.log(config); // Output: { headless: true }
console.log(locator);   // Output: button
console.log(coords);     // Output: [ 10, 20 ]


// The Golden Rule: Use interface until you need features it doesn't support (like Unions or Tuples), then switch to type.