'use strict';
const _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        phone: {
            type: DataTypes.STRING,
            field: 'phone'
        },
        username: {
            type: DataTypes.STRING,
            field: 'username'
        },
        firstName: {
            type: DataTypes.STRING,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            field: 'last_name'
        },
        password: {
            type: DataTypes.STRING,
            field: 'password'
        },
        passwordSalt: {
            type: DataTypes.STRING,
            field: 'password_salt'
        },
        roleId: {
            type: DataTypes.INTEGER,
            field: 'role_id'
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
            associate: function (models) {
                this.belongsTo(models['role'], {foreignKey: 'roleId'});
            }
        },
        instanceMethods: {
            toJSON: function () {
                let privateAttributes = ['password', 'passwordSalt', 'deletedAt'];
                return _.omit(this.dataValues, privateAttributes);
            }
        },
        timestamps: true,
        paranoid: true
    });
};
