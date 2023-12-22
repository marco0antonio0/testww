const request = require("supertest");
const { server, app } = require("./src/server");

describe("Teste unitarios de validação de rotas", () => {
  //=====================================================================
  it("a requisição para retorna varios usuario\nget rota get-users está válida", async () => {
    const resposta = await request(app).get("/api/get-users");
    // Use resposta.body.data ao invés de resposta.data
    resposta.body.data.forEach((item) => {
      expect(item).toEqual({
        nome: expect.any(String),
        senha: expect.any(String),
        id: expect.any(Number),
      });
    });
  });
  //=====================================================================
  it("a requisição para retorna apenas um usuario\nget rota get-user está válida", async () => {
    const resposta = await request(app).get("/api/get-user?id=1");
    // Use resposta.body.data ao invés de resposta.data
    expect(resposta.body).toEqual({
      nome: expect.any(String),
      senha: expect.any(String),
      id: expect.any(Number),
    });
  });
  //=====================================================================

  afterAll((done) => {
    // Encerra o aplicativo Express após todos os testes
    server.close(done);
  });
});
