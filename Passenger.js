const { Model } = require('objection');

class Passenger extends Model {
    static get tableName() {
        return 'passenger';
    }

    static get idColumn() {
        return 'id';
    }

    
    static get relationMappings() {
        const Ride = require('./Ride');
        return {
            rides: {
                relation: Model.ManyToManyRelation,
                modelClass: __dirname + "/Ride",
                join: {
                    from: 'passenger.id',
                    through: {
                        //passengers is the join table
                        from: 'passengers.passengerId',
                        to: 'passengers.rideId'
                    },
                    to: 'ride.id'
                }
            }
        }
    }
}
module.exports = { Passenger };

