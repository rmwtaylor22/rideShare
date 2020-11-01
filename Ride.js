const { Model } = require('objection');

class Ride extends Model {
    static get tableName() {
        return 'ride';
    }

    static get idColumn() {
        return 'id';
    }
    
    static get relationMappings() {
        const Location = require('./Location');
        const Passenger = require('./Passenger');
        const Driver = require('./Driver');
        const Vehicle = require('./Vehicle');
        return {
            locations: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + "/Location",
                join: {
                    from: 'ride.fromLocationId',
                    to: 'location.id'
                },
                join :{
                    from: 'ride.toLocationId',
                    to: 'location.id'
                }
            },

            passengers: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + "/Passenger",
                join: {
                    from: 'ride.id',
                    through: {
                        //passengers is the join table
                        from: 'passengers.rideId',
                        to: 'passengers.passengerId'
                    },
                    to: 'passenger.id'
                }
            },

            drivers: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + "/Driver",
                join: {
                    from: 'ride.id',
                    through: {
                        //drivers is the join table
                        from: 'drivers.rideId',
                        to: 'drivers.driverId'
                    },
                    to: 'driver.id'
                }
            },

            vehicles: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + "/Vehicle",
                join: {
                    from: 'ride.vehicleId',
                    to: 'vehicle.id'
                },
            }
        }
    }
}

module.exports = { Ride };