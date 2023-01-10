const getParameters = (url) => {
  console.log(url)
  let httpStatus = 200
  let file = ''
  
  switch (url) {
  case '/':
    file = 'index.html'
    break
  case '/clientes':
    file = 'clientes.html'
    break
  case '/contato':
    file = 'contato.html'
    break
  default:
    httpStatus = 404
    file = 'not-found.html'
    break
  }
  return {
    file,
    httpStatus
  }
}

export default getParameters