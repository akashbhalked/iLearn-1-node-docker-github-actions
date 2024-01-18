const app = require("./index");
const request = require("supertest");

describe("API integration tests", () => {
  it("GET /sum - should add two numbers", async () => {
    return await request(app)
      .get("/sum?a=2&b=2")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body.result).toBe(4);
      });
  });
});
