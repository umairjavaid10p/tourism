'use strict';
const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('country', {
        name: {
            type: DataTypes.STRING,
            field: 'name'
        },
        sortName: {
            type: DataTypes.STRING,
            field: 'sort_name'
        },
        phoneCode: {
            type: DataTypes.INTEGER,
            field: 'phone_code'
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
                let privateAttributes = ['deletedAt'];
                return _.omit(this.dataValues, privateAttributes);
            }
        },
        timestamps: false,
        paranoid: true
    });
};