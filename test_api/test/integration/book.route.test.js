const supertest = require("supertest")
const httpServer = require("../../server")

describe("Book Routes", () => {
    it("GET /books works", async() => {
        const response = await supertest(httpServer).get('/books')
        expect(response.headers["content-type"]).toBe("application/json")
        expect(response.status).toBe(200)
        expect(response.body.length).toBe(4)
    })

    it("GET /books?id works", async() => {
        const response = await supertest(httpServer).get('/books?id=1')
        expect(response.headers["content-type"]).toBe("application/json")
        expect(response.status).toBe(200)
        expect(response.body.title).toBe("The Design of Everyday Things")
        expect(response.body.author).toBe("Don Norman")
    })

    it("POST /books works", async() => {
        const newBook = {
            "title": "SheCodeAfrica",
            "author": "Ada Nduka Oyom",
            "year": 2013
        }
        const response = await supertest(httpServer).post('/books').send(newBook)
        expect(response.headers["content-type"]).toBe("application/json")
        expect(response.status).toBe(201)
        expect(response.body.title).toBe("SheCodeAfrica")
        expect(response.body.author).toBe('Ada Nduka Oyom')
        expect(response.body.year).toBe(2013)
    })

    it("DELETE /books works", async() => {
        const response = await supertest(httpServer).delete('/books?id=8')
        expect(response.headers["content-type"]).toBe("application/json")
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Book deleted')

        const response1 = await supertest(httpServer).get('/books')
        expect(response1.headers["content-type"]).toBe('application/json')
        expect(response1.status).toBe(200)
        expect(response1.body.length).toBe(4)
    })

    it("UPDATE /books works", async() => {
        const updateBook = {
            "year": 2024,
            "id": 1
        }
        const response = await supertest(httpServer).put('/books').send(updateBook)
        expect(response.headers["content-type"]).toBe('application/json')
        expect(response.status).toBe(200)
        expect(response.body.year).toBe(2024)
    })
})
