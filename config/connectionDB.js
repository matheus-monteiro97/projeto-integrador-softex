const { Sequelize } = require('sequelize');

// Configurações para conexão com o banco de dados Supabase
const sequelize = new Sequelize('postgresql://postgres:fapdeskgrupo3@db.cmkpcgvckrtqhiospkiz.supabase.co:5432/postgres');

module.exports = sequelize;