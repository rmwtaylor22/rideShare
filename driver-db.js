////////////////////////////////////////////////////////////////
// Simple in-memory "database"

module.exports = class rideShareDb {
    // Create an empty database.
    constructor() {
        this.drivers = {};
        this.vehicles = {};
        this.passengers = {};
        this.rides = {};
    }
    // Add a new driver
    addDriver(driver) {
        this.drivers[driver.id] = {
            id: driver.id, //this should be generated
            firstName: driver.firstName,
            lastName: driver.lastName,
            phone: driver.phone,
            licenseNumber: driver.licenseNumber
        };
    }
    // fetch one driver by ID
    getOneDriver(id) {
        return this.drivers[id];
    }
    // Update driver first name.
    updateDriverFirstName(id, firstName) {
        this.drivers[id].firstName = firstName;
    }
    // Update driver last name.
    updateDriverLastName(id, lastName) {
        this.drivers[id].lastName = lastName;
    }
    // Update driver phone number.
    updateDriverPhone(id, phone) {
        this.drivers[id].phone = phone;
    }
    // Update driver license number.
    updateDriverLicenseNumber(id, licenseNumber) {
        this.drivers[id].licenseNumber = licenseNumber;
    }


    

    // Fetch all users.
    getAllUsers() {
        return this.users;
    }

    // Fetch one user by ID.
    getOneUser(id) {
        return this.users[id];
    }

    // Add a new user.
    addUser(user) {
        this.users[user.id] = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone
        };
    }

    // Update user phone number.
    updatePhone(id, phone) {
        this.users[id].phone = phone;
    }

    // Delete user.
    deleteUser(id) {
        delete this.users[id];
    }
};
