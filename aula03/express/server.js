import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/contato', (req, res) => res.send('Contato!'))



app.listen(3033, () => {
  console.log('Servidor rodando na porta 3033 ...')
})
