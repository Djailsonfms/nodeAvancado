const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const { dirname } = require('path')
const router = express.Router()



router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/form.html'))
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/resultado', function(req, res){
    res.send('Nome: '+req.body.name+', Sobrenome: '+req.body.sname+', Idade: '+req.body.age+', Telefone: '+req.body.tel+' e seu E-mail: '+req.body.mail)

})

app.use('/',router)

app.listen(process.env.port || 1315)
console.log('Tudo Ok')