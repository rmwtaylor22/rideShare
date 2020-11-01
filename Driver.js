const { Model } = require('objection');

class Driver extends Model {
    static get tableName() {
        return 'driver';
    }

    static get idColumn() {
        return 'id';
    }

    
    static get relationMappings() {
        const Ride = require('./Ride');
        const Vehicle = require('./Vehicle');
        return {
            rides: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + "/Ride",
                join: {
                    from: 'driver.id',
                    through: {
                        //drivers is the join table
                        from: 'drivers.driverId',
                        to: 'drivers.rideId'
                    },
                    to: 'ride.id'
                }
            },

            vehicles: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + "/Vehicle",
                join: {
                    from: 'driver.id',
                    through: {
                        //authorization is the join table
                        from: 'authorization.driverId',
                        to: 'authorization.vehicleId'
                    },
                    to: 'vehicle.id'
                }
            }
        }
    }
}
module.exports = { Driver };

