function main() {
    // Create the constructor function
    function Car(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;

        // Method as part of the constructor function
        this.getMake = function() {
            return this.make;
        };
    }

    // Prototype methods
    Car.prototype.getModel = function() {
        return this.model;
    };

    Car.prototype.getYear = function() {
        return this.year;
    };

    Car.prototype.getColor = function() {
        return this.color;
    };

    Car.prototype.getMileage = function() {
        return this.mileage;
    };

    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
    console.log(myCar.getMake());    // Output: Toyota
    console.log(myCar.getModel());    // Output: Camry
    console.log(myCar.getYear());     // Output: 2020
    console.log(myCar.getColor());    // Output: blue
    console.log(myCar.getMileage());   // Output: 5000

    // Do not modify the return statement;
    return Car;
}

main();
