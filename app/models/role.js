'use strict';
const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role', {
        name: DataTypes.STRING
    }, {
        classMethods: {

        },
        instanceMethods: {
            toJSON: function () {
                let privateAttributes = ['created_at', 'updated_at', 'deleted_at'];
                return _.omit(this.dataValues, privateAttributes);
            }
        },
        timestamps: true,
        paranoid: true,
        underscored: true
    });
};