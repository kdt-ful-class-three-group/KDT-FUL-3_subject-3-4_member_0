import http from "node:http";






const server = http.createServer((request, response) => {

  /**
   * TODO : "/" url 엔드포인트에 접속 요청
   * * end() 메서드에서 단순 plain 방식으로 텍스트 응답
   * * 한글이 깨지지 않도록 charset=utf-8 헤더 설정
   * * 200 상태 코드 반환
   */


  if (request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end("안녕 서버야?");
  } 
  
});

server.listen(8000, () => {
  console.log("서버 도는 중 : http://localhost:8000");
});

