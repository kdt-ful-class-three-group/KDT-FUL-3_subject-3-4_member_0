import http from "node:http";
import fs from "node:fs";




const server = http.createServer((request, response) => {

  if (request.method === 'GET') {
    if (request.url === '/') {

      // TODO : 생각해볼 요소

      /**
       * ? 특정 url이 요청 들어롤때 file을 읽어오는 것이 좋을까?
       * 
       */


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

