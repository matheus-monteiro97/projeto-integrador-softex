const sequelize = require("sequelize");
const database = require("../../config/connectionDB");
const customerModel = require("./customerModel");
const employeeModel = require("./employeeModel");

class TicketModel {
  static ticket = database.define("ticket", {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    customerId: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: {
        model: customerModel.customer,
        key: "id",
      },
    },
    employeeId: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: employeeModel.employee,
        key: "id",
      },
    },
    openedById: {
      type: sequelize.ENUM("Employee", "Customer"),
      allowNull: false,
    },
    creationDate: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('NOW'),
    },
    closingDate: {
      type: sequelize.DATE,
      allowNull: true,
    },
    titleTicket: {
      type: sequelize.STRING(255),
      allowNull: false,
    },
    problem: {
      type: sequelize.STRING(255),
      allowNull: true,
    },
    solution: {
      type: sequelize.STRING(500),
      allowNull: true,
    },
    description: {
      type: sequelize.STRING(500),
      allowNull: false,
    },
    priority: {
      type: sequelize.ENUM("high", "mean", "low"),
      allowNull: true,
    },
    statusTicket: {
      type: sequelize.ENUM("open", "progress", "close"),
      allowNull: false,
      defaultValue: "open"
    },
    isActive: {
      type: sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });

  static associate() {
    TicketModel.ticket.belongsTo(customerModel.customer, {
      foreignKey: "customerId",
    });
    TicketModel.ticket.belongsTo(employeeModel.employee, {
      foreignKey: "employeeId",
    });
  }
}

module.exports = TicketModel;

// const sequelize = require("sequelize");
// const database = require("../../config/connectionDB");
// const customerModel = require("./customerModel");
// const employeeModel = require("./employeeModel");

// class TicketModel {
//   static ticket = database.define("ticket", {
//     id: {
//       type: sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     customerId: {
//       type: sequelize.INTEGER,
//       references: {
//         model: customerModel.customer,
//         key: "id",
//       },
//     },
//     employeeId: {
//       type: sequelize.INTEGER,
//       references: {
//         model: employeeModel.employee,
//         key: "id",
//       },
//     },
//     creationDate: {
//       type: sequelize.DATE,
//       allowNull: false,
//     },
//     closingDate: {
//       type: sequelize.DATE,
//       allowNull: true,
//     },
//     titleTicket: {
//       type: sequelize.STRING(255),
//       allowNull: false,
//     },
//     problem: {
//       type: sequelize.STRING(255),
//       allowNull: true,
//     },
//     solution: {
//       type: sequelize.STRING(500),
//       allowNull: false,
//     },
//     description: {
//       type: sequelize.STRING(500),
//       allowNull: false,
//     },
//     priority: {
//       type: sequelize.ENUM("high", "mean", "low"),
//       allowNull: false,
//     },
//     statusTicket: {
//       type: sequelize.ENUM("open", "progress", "close"),
//       allowNull: false,
//     },
//     isActive: {
//       type: sequelize.BOOLEAN,
//       allowNull: false,
//     },
//   });

//   static associate() {
//     TicketModel.ticket.belongsTo(customerModel.customer, {
//       foreignKey: "customerId",
//     }),
//       TicketModel.ticket.belongsTo(employeeModel.employee, {
//         foreignKey: "employeeId",
//       });
//   }
// }

// module.exports = TicketModel;
