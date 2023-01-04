import http from 'http'

http.createServer((req, res) => {

  const total = 50

  if (total % 2 === 1) {
    res.end('é impar!')
  } else {
    res.end('<h1>é par!</h1>')
  }
  

}).listen('3033')

