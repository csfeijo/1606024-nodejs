import mysql from 'mysql'

const con = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'empresa'
})

// Configura o con para reportar erros de conexao do banco via console do terminal
con.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('\x1b[31m','[ERROR] Conexão com a base de dados foi recusada.')
    }
  }
  if (connection) {
    connection.release()
  }
  return
})

export default con
