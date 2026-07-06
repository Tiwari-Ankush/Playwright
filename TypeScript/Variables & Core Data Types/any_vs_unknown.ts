// --- ANY ---
let dynamicData: any = "Hello";
dynamicData = 42; 

// TypeScript blindly trusts you, even if this will crash at runtime:
// dynamicData.toUpperCase(); // No TS error, but fails at runtime (42 has no toUpperCase method).
// safeDynamicData.toUpperCase(); // TS ERROR: 'safeDynamicData' is of type 'unknown'.
// means below will always throw an error at runtime if the type is not checked first.
// but with 'any', TypeScript does not enforce any type checking, so it allows you to call methods that may not exist on the actual value.
// means you can call methods on 'dynamicData' without any type checking, which can lead to runtime errors if the value is not of the expected type. this will run without any TypeScript errors, but it will throw a runtime error if 'dynamicData' is not a string.
if (typeof dynamicData === "string") {
    console.log(dynamicData.toUpperCase()); // TypeScript allows this now!
} else if (typeof dynamicData === "number") {
    console.log(dynamicData.toFixed(2)); // TypeScript knows it's a number here.
}   


// --- UNKNOWN ---
let safeDynamicData: unknown = "Hello";
safeDynamicData = 42;


// To use an 'unknown' variable, you MUST verify its type first:
if (typeof safeDynamicData === "string") {
    console.log(safeDynamicData.toUpperCase()); // TypeScript allows this now!
} else if (typeof safeDynamicData === "number") {
    console.log(safeDynamicData.toFixed(2)); // TypeScript knows it's a number here.
}

//You wrote excellent, safe code for both examples using typeof. But in the real world, developers make mistakes and forget to write those checks. unknown protects you from those mistakes; any does not.