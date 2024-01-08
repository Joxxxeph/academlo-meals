import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';


export const Error = sequelize.define('errors', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    field1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

