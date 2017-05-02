'use strict';
const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('state', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        countryId: {
            type: DataTypes.INTEGER,
            field: 'country_id'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    }, {
        classMethods: {
            associate: function (models) {
                this.belongsTo(models['country'], {foreignKey: 'countryId'});
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