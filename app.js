import http from "node:http";

const server = http.createServer((request, response) => {
  
});

server.listen(8000, () => {
  console.log("서버 도는 중 : http://localhost:8000");
});

