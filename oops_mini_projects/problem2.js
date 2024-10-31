function User(displayName) {
    this.displayName = displayName;
}

// Credentials for the system
const systemCredentials = {
    username: "system",
    password: "pass123"
};

// Implement the login method on the User prototype
User.prototype.login = function (username, password) {
    if (username === systemCredentials.username && password === systemCredentials.password) {
        console.log("Login successful!");
    } else {
        console.log("Login failed!");
    }
};

// Create the reusable loginFunction using bind
const loginFunction = User.prototype.login.bind(systemCredentials);

// Example usage:
const user = new User("John Doe");

loginFunction("system", "pass123"); // Expected output: "Login successful!"
loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"
