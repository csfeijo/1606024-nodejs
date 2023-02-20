const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401) // Unauthorized
  }

  if(token === process.env.API_TOKEN) {
    next()
    return
  }

  return res.sendStatus(403) // Forbidden
}

module.exports = validateToken