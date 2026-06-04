// 순수 정적 서버 — 배포 환경 시뮬레이션 (API 없음)
const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const MIME = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'application/javascript' };
http.createServer((req, res) => {
  let p = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const fp = path.join(__dirname, p);
  fs.readFile(fp, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'text/plain' });
    res.end(data);
  });
}).listen(PORT, () => console.log('정적 서버: http://localhost:' + PORT));
