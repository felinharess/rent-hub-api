import { DataTypes } from "sequelize";
import { database } from "../Database/database";

export const Tenant = database.define("tenant", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}
    , {
        tableName: "tenants"
});
