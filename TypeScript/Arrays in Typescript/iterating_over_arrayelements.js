"use strict";
const tags = ['@smoke', '@regression', '@sanity', '@e2e', '@api', '@ui', '@performance', '@security', '@accessibility', '@integration'];
// Best for Playwright (Async-safe)
for (const tag of tags) {
    console.log(tag);
}
console.log('--------------------');
// Quick but not async-safe
tags.forEach(tag => console.log(tag));
