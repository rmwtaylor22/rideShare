const { Model } = require('objection');

class Vehicle extends Model {
    static get tableName() {
        return 'vehicle';
    }

    static get idColumn() {
        return 'id';
    }

    
    static get relationMappings() {
        const Driver = require('./Driver');
        const Ride = require('./Ride');
        const Vehicle_Type = require('./Vehicle_Type');
        return {
            drivers: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + "/Driver",
                join: {
                    from: 'vehicle.id',
                    through: {
                        //authorization is the join table
                        from: 'authorization.vehicleId',
                        to: 'authorization.driverId'
                    },
                    to: 'driver.id'
                }
            },

            rides: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + "/Ride",
                join: {
                    from: 'vehicle.id',
                    to: 'ride.vehicleId'
                },
            },

            vehicle_types: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + "/Vehicle_Type",
                join: {
                    from: 'vehicle.vehicleTypeId',
                    to: 'vehicle_type.id'
                }
            }
        }
    }
}
module.exports = { Vehicle };