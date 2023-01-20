import express from 'express'
import bodyParser from 'body-parser'
import con from './connect-db.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

// Para node 16 ou menor importamos passando o parametro assert
import listarDepartamentos from './mock/ListarDepartamentos.json' assert { type: 'json'}
import listarDepartamento from './mock/ListarDepartamento.json' assert { type: 'json'}

// Para Node acima da versão 16 importamos sem o assert
//import listarDepartamentos from './mock/ListarDepartamentos.json'

const app = express()
app.use(bodyParser.json())
// O "extended" habilita o JSON para suportar caracteres UTF-8
app.use(bodyParser.urlencoded({ extended: true }))

const options = {
  definition: {
    info: {
      title: 'API NODE JS',
      version: '1.0.0'
    }
  },
  apis: ['server.js']
}
const swaggerSpec = swaggerJSDoc(options)

app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

// Habilita o uso de mock´s
const useMock = false

/**
 * @swagger
 * 
 * /departamentos:
 *  get:
 *    description: Lista todos os departamentos ordenados pelo nome
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Exibe todos os departamentos em um vetor
 */
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

/**
 * @swagger
 * 
 * /departamentos:
 *  post:
 *    description: Insere um departamento na base
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: formData
 *        name: nome
 *        description: nome do departamento (unique)
 *        required: true
 *        type: string
 *      - in: formData
 *        name: sigla
 *        description: sigla do departamento (unique)
 *        type: string 
 *    responses:
 *      200:
 *        description: registro inserido com sucesso
 *      500:
 *        description: erro do banco de dados
 */
app.post('/departamentos', (req, res) => {
  const method = req.method
  console.log(`${method} /departamentos`)
  let { nome = '', sigla = '' } = req.body

  nome = nome.trim()
  sigla = sigla.trim()

  if (nome === '' || sigla === '') {
    res.send({
      message: 'Wrong or insufficient parameters',
      parameters_received: req.body
    })
    return 
  }

  con.query(`INSERT INTO DEPARTAMENTOS (nome, sigla) VALUES ('${nome}', '${sigla}')`, (err, result) => {
    if (err) {
      res.status(500)
      res.send(err)
      return
    }

    //Em caso de sucesso:
    if (result.insertId) {
      res.send({
        message: 'Register inserted with success',
        insertId: result.insertId
      })  
      return
    }
    res.send(result)
  })

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