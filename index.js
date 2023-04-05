const express = require("express");
const app = express();
const port = 3000;

const calculatorRoute = require("./routes/calculatorRoute");

app.use("/", express.static("public"));
app.use(express.json());

// create route to router

app.use("/calculator", calculatorRoute);

// app.get("/test", (req, res) => {
//   res.send("Hello World!")
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// // Server 1
// const server1 = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello from Server 1!\n');
// });

// server1.listen(port1, () => {
//     console.log(`Server 1 running at http://localhost:${port1}/`);
// });

// // Server 2
// const server2 = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello from Server 2!\n');
// });

// server2.listen(port2, () => {
//     console.log(`Server 2 running at http://localhost:${port2}/`);
// });

// // Server 3
// const server3 = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello from Server 3!\n');
// });

// server3.listen(port3, () => {
//     console.log(`Server 3 running at http://localhost:${port3}/`);
// });
