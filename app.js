import http from "node:http";






const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end("안녕 서버야?");
  } 
  
});

server.listen(8000, () => {
  console.log("서버 도는 중 : http://localhost:8000");
});

