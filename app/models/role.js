'use strict';
const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('role', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    }, {
        classMethods: {

        },
        instanceMethods: {
            toJSON: function () {
                let privateAttributes = ['createdAt', 'updatedAt', 'deletedAt'];
                return _.omit(this.dataValues, privateAttributes);
            }
        },
        timestamps: true,
        paranoid: true
    });
};