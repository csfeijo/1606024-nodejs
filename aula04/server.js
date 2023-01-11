import express from 'express'
import path from 'path'
// Estes imports são necessários devido ao uso de "type:module" no nosso package.json
// que inviabilizar o acesso direto a variavel de ambiente __dirname
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>')
})

app.post('/', (req, res) => {
  res.send('<h1>Hello world via POST!</h1>')
})

app.get('/clientes', (req, res) => {
  res.send('<h1>Cliente!</h1>')
})

app.get('/clientes/:idCliente', (req, res) => {

  const { idCliente } = req.params
  res.send(`<h1>Cliente - id: ${idCliente}</h1>`)
})

app.get('/clientes/:idCliente/:x', (req, res) => {
  
  console.log(req.params)

  const { idCliente, x } = req.params

  res.send(`<h1>Cliente - id: ${idCliente} - x: ${x} </h1>`)
})

app.get('/produtos', (req, res) => {
  res.sendFile('produtos.html', {
    root: path.join(__dirname, 'public')
  })
})


// Mapeamento separado de metodos para uma mesma rota
// app.get('/livros',(req, res) => res.send('lista os livros'))
// app.post('/livros',(req, res) => res.send('cadastrar os livros'))
// app.delete('/livros', (req, res) => res.send('delete os livros'))

// Mapeamento separado de metodos para uma mesma rota (forma mais elegante)
app.route('/livros')
  .get((req, res) => res.send('lista os livros'))
  .post((req, res) => res.send('cadastrar os livros'))
  .delete((req, res) => res.send('delete os livros'))




app.listen(3033, () => {
  console.log('Servidor executando...')
})
