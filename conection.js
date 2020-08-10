const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const host = 'localhost'


//config
    //Template 
    app.engine('handlebars', exphbs({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    
    // body-parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //Conexao com banco mysql
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('sistemanode', 'gustavo', 'CORVO_forte@123', {
        host: 'localhost',
        dialect: 'mysql'
    })

    // autenticação com o banco 
    sequelize.authenticate().then(() => {console.log("Conexao com 'sistema node' concluida com sucesso!")}).catch((error) => {console.log(`Algo deu errado: ${error}`)})

    // Conexao de rotas
    app.get('/', (req,res) =>{
        res.render('index')
    })
    
    app.post('/cad', (req, res) =>{
        req.body.titulo
        res.send("Texto: " + req.body.conteudo + " Titulo: " + req.body.titulo)
    })

//levantando servidor 
app.listen(port, host, () =>{
    console.log("Servidor levantado com sucesso")
    console.log(`Porta: ${port}`)
    console.log(`Host: ${host}`)
    console.log(`Servidor localizado em http://${host}:${port}/`)
})


