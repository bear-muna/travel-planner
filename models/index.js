const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.hasMany(Trip);
Trip.hasOne(Traveller);

Trip.hasOne(Location);
Location.hasMany(Trip);


module.exports = {
    Traveller: Traveller,
    Location: Location,
    Trip: Trip
}