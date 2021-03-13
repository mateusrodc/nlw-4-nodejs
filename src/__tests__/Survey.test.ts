import request from 'supertest';
import { app } from '../app';

import createConnection from "../database";

describe("Surveys",() => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    
    it("deve criar um nova pesquisa", async()=>{
        const response = await request(app).post("/surveys").send({
            title: "teste3",
            description: "teste3"
        });
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
    });
    
    it("deve retornar todas as pesquisas existentes", async()=>{
        await request(app).post("/surveys").send({
            title: "teste4",
            description: "teste4"
        });
        const response = await request(app).get("/survey");
        expect(response.body.length).toBe(2);
    });
    
})