import supertest from "supertest"
import { web } from "../src/app/web"
import { prismaClient } from "../src/app/database"



describe('POST /api/register', () => {

  afterEach(async () => {
    await prismaClient.member.delete({
      where: {
        email: "dafa123@gmail.com"
      }
    })
  })

  it('should can register new member', async () => {
    const result = await supertest(web)
      .post('/api/register')
      .send({
        email: "dafa123@gmail.com",
        username: "Dafasdasfa",
        password: "daffaasda123",
        usia: "203",
        no_telepon: "asdasdsad"
      })
    expect(result.status).toBe(200)
  })
})