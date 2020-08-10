const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
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


    // Conexao de rotas
    app.get('/', (req,res) =>{
        res.render('index')
    })
    
    app.get('/home', (req,res) =>{
        Post.findAll({order: [['id', 'DESC']]}).then((posts) => {res.render('home', {values: posts})})    
    })
    app.post('/cad', (req, res) =>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() =>{ res.redirect('/home')}).catch((error) =>{"Algo deu errado " + error})
    })

    app.get('/deletar/:id', (req,res) =>{
        Post.destroy({where: {'id': req.params.id}}).then(() => res.send("Deletado com sucesso!!")).catch((error) =>{res.send("Não foi possivel executar a ação: " + error)})
    })
    

//levantando servidor 
app.listen(port, host, () =>{
    console.log("Servidor levantado com sucesso")
    console.log(`Porta: ${port}`)
    console.log(`Host: ${host}`)
    console.log(`Servidor localizado em http://${host}:${port}/`)
})


