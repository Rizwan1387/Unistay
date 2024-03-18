const express = require('express');
const mysql = require('mysql2/promise'); // Import mysql2/promise for async/await support
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Rizwan@786',
    database: 'unistay'
});

// Optional: Test the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
    connection.release();
  }
});

// Your API routes
app.get('/api/data', async (req, res) => {
  try {
    const [rows, fields] = await db.execute('SELECT * from aprtments');
    res.json(rows);
  } catch (error) {
    console.error('Error retrieving data from database:', error);
    res.status(500).send('Error retrieving data from database');
  }
});
app.get('/', async (req, res) => {
    res.json("Server Awake!!")
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
