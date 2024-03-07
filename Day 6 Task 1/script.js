class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }

    greet() {
        return "Hello, my name is " + this.getFullName() + ".";
    }

    getDetails() {
        return "Name: " + this.getFullName() + ", Age: " + this.age + ", Gender: " + this.gender;
    }
}

// Example usage of Person class
const person1 = new Person("Abirami", "Manikandan", 25, "Female");
const person2 = new Person("Manikandan", "Subramanian", 32, "Male");

console.log(person1.greet());
console.log(person1.getDetails());

console.log(person2.greet());
console.log(person2.getDetails());
