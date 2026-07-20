// TypeScript only knows this is 'unknown' data
let rawData: unknown = "Playwright is awesome";

// We assert (cast) it as a string so we can use string methods on it safely
let lengthOfString: number = (rawData as string).length;

console.log(lengthOfString); // Outputs: 21