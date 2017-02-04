
// curl -k https://localhost:8000/
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('keys/ryans-key.pem'),
  cert: fs.readFileSync('keys/ryans-cert.pem')
};

https.createServer(options, (req, res) => {
      fs.readFile(__dirname + '/public/index.html', 'utf-8', function (err, data) {
          if (err) {
              res.writeHead(404, {'Content-Type': 'text/plain'});
              res.write('not found!');
              return res.end();
          }
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
      });
}).listen(8000);
