const Sequelize = require ("sequelize");
const database = require ("../../config/connectionDB");
const UserModel = require("./UserModel");

class EmployeeModel {
    static employee = database.define("employee", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type:Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UserModel.user,
                key: "id",
            },
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
          },
        phoneNumber: {
            type: Sequelize.STRING(14),
            unique: true,
            allowNull: false,
        },
        registrationNumber: {
            type: Sequelize.STRING(12),
            allowNull: false,
        },
        role: {
            type: Sequelize.STRING(15),
            allowNull: false,
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
    });

    static associate() {
        EmployeeModel.employee.belongsTo(UserModel.user, { foreignKey: "userId" });
    }

}

module.exports = EmployeeModel;

    // static createEmployee = async function (data) {
    //     try {
    //         const newEmployee = await this.employee.create(data);
    //         return newEmployee;
    //     } catch (error) {
    //         throw new Error("Error creating Employee");
    //     }
    // };


// class EmployeeModel extends UserModel {
//     constructor () {
//         super();
//         this.employee = database.define ("employee", {
//             id: {
//                 type: Sequelize.INTEGER,
//                 autoIncrement: true,
//                 allowNull: false,
//                 primaryKey: true,
//             },
//             registrationNumber: {
//                 type: Sequelize.STRING(12),
//                 allowNull: false,
//             },
//             role: {
//                 type: Sequelize.STRING(15),
//                 allowNull: false,                 
//             },
//             isActive: {
//                 type: Sequelize.BOOLEAN,
//                 allowNull: false,
//             },
//             isAdmin: {
//                 type: Sequelize.BOOLEAN,
//                 allowNull: false,
//             },
//         })
//     }
// }