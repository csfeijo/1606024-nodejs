// npm install --save-dev moch chai supertest
import request from 'supertest'
import app from './server.js'
import { describe, it } from 'mocha'

describe('GET /departamentos', () => {
  it('deve retornar uma lista de departamentos', async () => {

    await request(app)
      .get('/departamentos')
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
