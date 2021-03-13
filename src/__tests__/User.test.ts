import request from 'supertest';
import { app } from '../app';

import createConnection from "../database";

describe("Users",() => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });
    
    it("deve criar um novo usuário", async()=>{
        const response = await request(app).post("/users").send({
            email: "mateus@gmail.com",
            name: "Mateus Rodrigues"
        });
        expect(response.status).toBe(201)
    });

    it("não deve criar um novo usuário com email existente", async()=>{
        const response = await request(app).post("/users").send({
            email: "mateus@gmail.com",
            name: "Mateus Rodrigues"
        });
        expect(response.status).toBe(400)
    })
    
})