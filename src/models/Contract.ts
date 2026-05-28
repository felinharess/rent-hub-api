import { DataTypes } from "sequelize";
import { database } from "../Database/database";

export const Contract = database.define("contract", {
    tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    monthlyRent: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    dueDay: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("ACTIVE", "FINISHED", "CANCELED", "PENDING"),
        allowNull: false,
        defaultValue: "PENDING"
    }
}, {
    tableName: "contracts"
});