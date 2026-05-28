import { DataTypes } from "sequelize";
import { database } from "../Database/database";

export const Property = database.define("property", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rentPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    baseValue: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    garageSpots: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isRented: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: "properties"
});