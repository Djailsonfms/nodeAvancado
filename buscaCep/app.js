//Chamar o express padrão
const express = require('express')
const app = express()

//Chamar Bory parsa parapegar o dado do body
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')

//configurar o body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//configuração da views

//declarando que vou usar o ejs
app.set('view engine', 'ejs')
//mostrando para o express onde esta a pasta de views
app.set('views','./src/views')

//renderizando minha pagina principal
app.get('/', (req, res)=>{ //passando o nome da rota
    //chamando o arquivo da minha view
    res.render('index')
})

//pegando os dados da minha view 
app.post('/envia-cep',async(req,res)=>{ //passando o nome da rota
    const{cep}=req.body
    const resultado = await buscaCep(cep)
    
    res.render('resultado',{dado:resultado})
})

app.listen(3333)