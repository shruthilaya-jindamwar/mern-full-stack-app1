const http = require('http');
const mysql = require('mysql2');

// Create DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // user1
  password: 'pwd123$$$',
  database: 'school'
});

// Connect to DB
db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Create HTTP server
const server = http.createServer((req, res) => {

  // Enable CORS (important for React)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Route: GET /students
  if (req.method === 'GET' && req.url === '/students') {
    db.query('SELECT * FROM students', (err, results) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(err));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(results));
    });
  } else {
    // 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start server
server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});