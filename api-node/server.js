import express from 'express'

const app = express()

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

  console.log(`${method} /departamentos`)
  res.send(`${method} /departamentos`)
})

app.put('/departamentos/:idDepartamento',  (req, res) => {
  const { idDepartamento } = req.params
  const method = req.method
  console.log(`${method} /departamentos/${idDepartamento}`)
  res.send(`${method} /departamentos/${idDepartamento}`)
})

app.delete('/departamentos/:idDepartamento',  (req, res) => {
  const { idDepartamento } = req.params
  const method = req.method

  console.log(`${method} /departamentos/${idDepartamento}`)
  res.send(`${method} /departamentos/${idDepartamento}`)
})


app.listen(3033, () => {
  console.log('Server is running!')
})