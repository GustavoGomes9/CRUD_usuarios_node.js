const Sequelize = require('sequelize')
// constantes de banco
    const banco = 'sistemanode'
    const user = 'gustavo'
    const password = 'CORVO_forte@123'

 //Conexao com banco mysql
    const sequelize = new Sequelize(banco, user, password, {
        host: 'localhost',
        dialect: 'mysql'
    })
    module.exports ={
        Sequelize: Sequelize,
        sequelize: sequelize
    }