import app from 'src/app'
import supertest from 'supertest'
import { setup } from 'src/database'

const request = supertest(app)

const db = setup('mongodb://localhost/db-test')

beforeAll(async () => {
  await db.connect()
})

afterAll(async () => {
  await db.clear()
  await db.close()
})

describe('POST /api/example', () => {
  test('name field is required', () => {
    return request.post('/api/example')
      .expect((response) => {
        expect(response.status).toBe(422)
        expect(response.body.errors.name[0]).toMatch(/required/)
      })
  })

  const payload = {
    name: 'junior'
  }
  test('store success', () => {
    return request.post('/api/example')
      .send(payload)
      .expect((response) => {
        expect(response.status).toBe(201)
        expect(response.body.data.name).toBe(payload.name)
      })
  })
})
