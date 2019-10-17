const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';

//  config[environment] is bracket notation.  Since environment variable is a string representing 1 part of the object or the other, a string is being passed via bracket notation.  Basically the string in the bracket is dynamic.  in this case if this were to be dot notation, it would resolve to config.testing or config.development.  clever clever!
console.log(config[environment])
module.exports = knex(config[environment]);
