'use strict';
const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('city', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        stateId: {
            type: DataTypes.INTEGER,
            field: 'state_id'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    }, {
        classMethods: {
            associate: function (models) {
                this.belongsTo(models['state'], {foreignKey: 'stateId'});
            }
        },
        instanceMethods: {
            toJSON: function () {
                let privateAttributes = ['deletedAt'];
                return _.omit(this.dataValues, privateAttributes);
            }
        },
        timestamps: false,
        paranoid: true
    });
};