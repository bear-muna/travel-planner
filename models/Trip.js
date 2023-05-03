const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {};

Trip.init({
    trip_budget: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    traveller_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
},{
    sequelize,
    timestamps: false
});

module.exports = Trip;