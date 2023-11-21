'use strict';

const {
  CustomerSchema,
  CUSTOMER_TABLE,
} = require('./../models/customer.model');
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down(queryInterface) {},
};


// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface) {
//     await queryInterface.addConstraint('costumers', {
//       fields: ['user_id'],
//       type: 'unique',
//       name: 'unique_user_id',
//     });
//   },

//   async down(queryInterface) {
//     await queryInterface.removeConstraint('costumers', 'unique_user_id');
//   },
// };
