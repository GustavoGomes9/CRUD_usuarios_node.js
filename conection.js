const express = require('express')
const app = express()
const port = 8081
const host = 'localhost'


//config
    //Template 
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    //Conexao com banco mysql
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('sistemanode', 'gustavo', 'CORVO_forte@123', {
        host: 'localhost',
        dialect: 'mysql'
    })

    // autenticação com o banco 
    sequelize.authenticate().then(() => {console.log("Conexao com 'sistema node' concluida com sucesso!")}).catch((error) => {console.log(`Algo deu errado: ${error}`)})

    // Conexao de rotas
    app.get('/home', (req,res) =>{
        res.render('index')
    })

//levantando servidor 
app.listen(port, host, () =>{
    console.log("Servidor levantado com sucesso")
    console.log(`Porta: ${port}`)
    console.log(`Host: ${host}`)
    console.log(`Servidor localizado em http://${host}:${port}/`)
})


