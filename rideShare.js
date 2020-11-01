////////////////////////////////////////////////////////////////
// Initialize our "database"

const rideShareDb = require('./driver-db');
const Drivers = new rideShareDb();

Users.addUser({
    id: 'alice',
    name: 'Alice',
    email: 'alice@example.com',
    phone: '765-555-4242'
});

Users.addUser({
    id: 'eva',
    name: 'Eva',
    email: 'eva@example.net',
    phone: '800-666-6161'
});

////////////////////////////////////////////////////////////////
// Hapi Server - https://hapijs.com/

// Require the Hapi module
const Hapi = require('@hapi/hapi');

const init = async () => {
    // Create a new Hapi server
    const server = Hapi.server({
        host: 'localhost',
        port: 3000
    });

    // Output endpoints at startup.
    await server.register({plugin: require('blipp'), options: {showAuth: true}});

    // Log stuff.
    await server.register({
        plugin: require('hapi-pino'),
        options: {
            prettyPrint: true
        }
    });

    // Define routes
    server.route([
        {
            method: 'POST',             // Add a new driver
            path: '/drivers/',
            handler: (request, h) => {
                Drivers.addDriver(request.payload);
                return Drivers.getOneDriver(request.payload.id);
            }
        },
        {
            method: 'GET',              // Get driver by ID
            path: '/drivers/{id}',
            handler: (request, h) => {
                const driverId = request.params.id
                request.logger.info(`Request for details of driver ${driverId}`);
                return Drivers.getOneDriver(driverId);
            }
        },
        {
            method: 'PATCH',            // Update a driver's first name
            path: '/drivers/{id}',
            handler: (request, h) => {
                Drivers.updateDriverFirstName(request.params.id, request.payload.firstName);
                return Drivers.getOneDriver(request.params.id);
            }
        },
        {
            method: 'PATCH',            // Update a driver's last name
            path: '/drivers/{id}',
            handler: (request, h) => {
                Drivers.updateDriverLastName(request.params.id, request.payload.lastName);
                return Drivers.getOneDriver(request.params.id);
            }
        },
        {
            method: 'PATCH',            // Update a driver's phone number
            path: '/drivers/{id}',
            handler: (request, h) => {
                Drivers.updateDriverPhone(request.params.id, request.payload.phone);
                return Drivers.getOneDriver(request.params.id);
            }
        },
        {
            method: 'PATCH',            // Update a driver's license number
            path: '/drivers/{id}',
            handler: (request, h) => {
                Drivers.updateDriverLicenseNumber(request.params.id, request.payload.licenseNumber);
                return Drivers.getOneDriver(request.params.id);
            }
        },
    ]);

    // Fire it up!
    await server.start()
}

// Catch promises without a .catch. Per the Node documentation,
// unhandledRejection is "emitted whenever a Promise is rejected
// and no error handler is attached to the promise."
process.on('unhandledRejection', err => {
    console.error(err);
    process.exit(1);
});

// Fire it up!
init();