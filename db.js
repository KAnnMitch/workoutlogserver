    const Sequelize = require('sequelize');
    
    const sequelize = new Sequelize("postgres://postgres:password@localhost:5432/workoutlog");
    
    module.exports = sequelize;