import express from 'express'
import bodyParser from 'body-parser'
import con from './connect-db.js'
// Para node 16 ou menor importamos passando o parametro assert
import listarDepartamentos from './mock/ListarDepartamentos.json' assert { type: 'json'}
import listarDepartamento from './mock/ListarDepartamento.json' assert { type: 'json'}

// Para Node acima da versão 16 importamos sem o assert
//import listarDepartamentos from './mock/ListarDepartamentos.json'

const app = express()
app.use(bodyParser.json())
// O "extended" habilita o JSON para suportar caracteres UTF-8
app.use(bodyParser.urlencoded({ extended: true }))

// Habilita o uso de mock´s
const useMock = false

app.get('/departamentos', (req, res) => {
  const method = req.method
  console.log(`${method} /departamentos`)

  if (useMock) {
    res.send(listarDepartamentos)
    return
  }

  // Executa a query para o banco de dados
  con.query('SELECT * FROM DEPARTAMENTOS ORDER BY nome',  (err, result) => {
    if (err) {
      res.status(500)
      res.send(err)
    }

    res.send(result)
  })  
})

app.get('/departamentos/:idDepartamento', (req, res) => {
  const { idDepartamento } = req.params
  const method = req.method
  console.log(`${method} /departamentos/${idDepartamento}`)

  if (useMock) {
    res.send(listarDepartamento)
    return
  }

  con.query(`SELECT * FROM DEPARTAMENTOS WHERE id_departamento = '${idDepartamento}'`,  (err, result) => {
    if (err) {
      res.status(500)
      res.send(err)
    }

    if(result.length === 0) {
      res.status(404) // NOT FOUND
    }

    res.send(result)
  })  

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

// Exemplo utilizando diversos formatos de parametros
app.get('/funcionarios/:busca', (req, res) => {
  const { busca } = req.params
  const { exact, searchField } = req.body
  const strLike = exact ? `= '${busca}'` : `LIKE '%${busca}%'`
  const query = `SELECT * FROM FUNCIONARIOS WHERE ${searchField} ${strLike}`

  console.log(query)

  con.query(query, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})






app.listen(3033, () => {
  console.log('Server is running!')
})