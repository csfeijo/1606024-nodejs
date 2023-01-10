import { createServer } from 'http'
import { readFile } from 'fs'
import getParameters from './getParameters.js'


createServer((req, res) => {
  
  const { file, httpStatus } = getParameters(req.url)

  res.writeHead(httpStatus, { 'Content-type' : 'text/html; charset=utf-8' })

  readFile(file, 'utf-8', (err, data) => {
    res.write(data)
    res.end()
  })

}).listen(3033)
