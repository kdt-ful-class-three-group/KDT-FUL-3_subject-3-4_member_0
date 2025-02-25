import http from "node:http";
import fs from "node:fs";




const server = http.createServer((request, response) => {

  if (request.method === 'GET') {
    if (request.url === '/') {
      console.log(" '/' 요청에, /public/index.html 파일 응답해주기");

      const html = fs.readFileSync('./public/index.html', 'utf-8');

      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(html);
    }
  } 
  
});

server.listen(8000, () => {
  console.log("서버 도는 중 : http://localhost:8000");
});

