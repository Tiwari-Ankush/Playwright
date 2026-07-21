// When you create objects, TypeScript needs to know their exact "shape" (what keys they have and what data types those keys hold). You have two ways to define this shape: type and interface.

interface UserConfig {
    username: string;
    timeout: number;
}

// Interfaces can be "extended" to inherit properties
interface AdminConfig extends UserConfig {
    adminLevel: number;
}

const user: UserConfig = {
    username: "testUser_1",
    timeout: 5000
};

const admin: AdminConfig = {
    username: "adminUser_1",
    timeout: 10000,
    adminLevel: 1
};

console.log(user); // Output: { username: 'testUser_1', timeout: 5000 }
console.log(admin); // Output: { username: 'adminUser_1', timeout: 10000, adminLevel: 1 }   