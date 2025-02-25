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

      //* 아래는 js, css 파일 응답 코드


      /**
       * TODO : 생각해볼 요소
       * 
       * ? 몇개의 정적 페이지를 불러들이고 요청해야될지 미지수이니까,
       * ? 이 코드의 if문 응답은 적절하다고 볼 수 없음
       * 
       * * 추후에 규모가 커질 것을 생각하면 어떻게 처리해야 할까?
       * 
       * 
       */


    } else if (request.url === '/index.js') {
      const js = fs.readFileSync('./public/index.js', 'utf-8');
      response.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
      response.end(js);
    } else if (request.url === '/index.css') {
      const css = fs.readFileSync('./public/index.css', 'utf-8');
      response.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
      response.end(css);
    }
  } 
  
});

server.listen(8000, () => {
  console.log("서버 도는 중 : http://localhost:8000");
});

