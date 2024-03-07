class Uber {
    constructor(distance, time) {
        this.distance = distance; // in kilometers
        this.time = time; // in minutes
    }

    calculatePrice() {
        // Basic calculation for demonstration purposes
        const baseFare = 2; // Base fare in rupees
        const distanceFare = 1.5; // Fare per kilometer in rupees
        const timeFare = 0.5; // Fare per minute in rupees

        const totalFare = baseFare + (this.distance * distanceFare) + (this.time * timeFare);
        return totalFare;
    }
}

// Example usage of Uber class
const distance = 10; // in kilometers
const time = 20; // in minutes

const uberRide = new Uber(distance, time);
const totalPrice = uberRide.calculatePrice();
console.log("Total Price for Uber Ride:", totalPrice.toFixed(2), "rupees");
