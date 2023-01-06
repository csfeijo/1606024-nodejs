import http from 'http'
import currentDate from './currentDate.js'
import myName from './myName.js'

http.createServer((req, res) => {

  console.log(req.url)  
  console.log('Recebi a request', currentDate())
  
  res.writeHead(200, { 
    'Content-type': 'text/html; charset=utf-8'
  })

  switch(req.url) {
  case '/departamentos':
    res.write('<h2>Página de Departamentos</h2>') 
    break
  case '/contato':
    res.write('<h2>Página de Contato</h2>')
    break
  default:
    res.write(`<h1>Bem vindo ${myName()}</h1>`)
    res.write('<h2>Curso de NodeJS</h2>')
    break
  }

  res.end()

}).listen(3030)
