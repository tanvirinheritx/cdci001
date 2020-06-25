var request = require("supertest");
var app = require("../index.js");
describe("GET /", function () {
    it("respond with hello world", function (done) {
        //navigate to root and check the the response is "hello world"
        request(app).get("/").expect("hello world", done);
    });
});


// app.get("/", function (req, res) {
//     it("respond with hello world", function (done) {
//         //navigate to root and check the the response is "hello world"
//         request(app).get("/").expect("hello world", done);
//     });
//     // res.send("hello world");
// });