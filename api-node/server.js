import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
// O "extended" habilita o JSON para suportar caracteres UTF-8
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/departamentos', (req, res) => {
  const method = req.method
  console.log(`${method} /departamentos`)

  res.send(`${method} /departamentos`)
})

app.get('/departamentos/:idDepartamento', (req, res) => {
  const { idDepartamento } = req.params
  const method = req.method

  console.log(`${method} /departamentos/${idDepartamento}`)
  res.send(`${method} /departamentos/${idDepartamento}`)
})

app.post('/departamentos', (req, res) => {
  const method = req.method

  console.log(req.body.nome)

  console.log(`${method} /departamentos`)
  res.send(`${method} /departamentos`)
})

app.put('/departamento/:idDepartamento',  (req, res) => {
  const { idDepartamento } = req.params
  const method = req.method
  console.log(`${method} /departamentos/${idDepartamento}`)
  res.send(`${method} /departamentos/${idDepartamento}`)
})

app.delete('/departamento/:idDepartamento',  (req, res) => {
  const { idDepartamento } = req.params
  const method = req.method

  console.log(`${method} /departamentos/${idDepartamento}`)
  res.send(`${method} /departamentos/${idDepartamento}`)
})


app.listen(3033, () => {
  console.log('Server is running!')
})