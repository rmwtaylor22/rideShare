const { Model } = require('objection');

class Location extends Model {
    static get tableName() {
        return 'location';
    }

    static get idColumn() {
        return 'id';
    }
/*
    static get jsonSchema() {
        return {
            type: 'string',
            required: 'state'


        }
    }
    */
    
    static get relationMappings() {
        const State = require('./State');
        const Ride = require('./Ride');
        return {
            states: {
                relation: Model.BelongsToOneRelation,
                modelClass: __dirname + "/State",
                join: {
                    from: 'location.state',
                    to: 'state.abbreviation'
                }
            },

            rides: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + "/Ride",
                join: {
                    from: 'location.id',
                    to: 'ride.fromLocationId'
                },
                join :{
                    from: 'location.id',
                    to: 'ride.toLocationId'
                }
            }
        }
    }
}

module.exports = { Location };