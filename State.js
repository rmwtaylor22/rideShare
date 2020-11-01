const { Model } = require('objection');

class State extends Model {
    static get tableName() {
        return 'state';
    }

    static get idColumn() {
        return 'abbreviation';
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
        const Location = require('./Location');
        return {
            locations: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + "/Location",
                join: {
                    from: 'state.abbreviation',
                    to: 'location.state'
                }
            }
        }
    }
}
module.exports = { State };