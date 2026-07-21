// method overriding and polymorphism in TypeScript
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
const myDog = new Dog();
const myCat = new Cat();
myDog.makeSound();  // Output: Woof! Woof!
myCat.makeSound();  // Output: Meow! Meow!

//method overriding allows child classes to provide a specific implementation of a method that is already defined in its parent class. Polymorphism allows us to treat objects of different classes through the same interface, enabling flexibility and reusability in code.
// example of method overriding
class Vehicle {
    startEngine() {
        console.log("Starting the vehicle's engine...");
    }   
}
class Car extends Vehicle {
    startEngine() {
        console.log("Starting the car's engine with a key...");
    }
}
class Motorcycle extends Vehicle {
    startEngine() {
        console.log("Starting the motorcycle's engine with a button...");
    }
}
const myCar = new Car();
const myMotorcycle = new Motorcycle();
myCar.startEngine();  // Output: Starting the car's engine with a key...
myMotorcycle.startEngine();  // Output: Starting the motorcycle's engine with a button...