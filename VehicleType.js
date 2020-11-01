const { Model } = require('objection');

class VehicleType extends Model {
    static get tableName() {
        return 'vehicleType';
    }

    static get idColumn() {
        return 'id';
    }
    
    static get relationMappings() {
        const Vehicle = require('./Vehicle');
        return {
            vehicles: {
                relation: Model.HasManyRelation,
                modelClass: __dirname + "/Vehicle",
                join: {
                    from: 'vehicleType.id',
                    to: 'vehicle.vehicleTypeId'
                }
            }
        }
    }
}
module.exports = { VehicleType };