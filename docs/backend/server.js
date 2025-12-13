const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });

const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());

// Serve static files (music files)
app.use('/music', express.static(path.join(__dirname, 'music')));

// Serve frontend HTML files
app.use(express.static(path.join(__dirname, '..')));

// 🔑 MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ MySQL connected');
});

// 🎵 API: get songs (optionally filter by mood)
app.get('/songs', (req, res) => {
  const mood = req.query.mood; // e.g., /songs?mood=Chill
  let sql = 'SELECT * FROM songs';
  const params = [];

  if (mood) {
    sql += ' WHERE mood = ?';
    params.push(mood);
  }

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    // Convert relative URLs to full URLs
    const songs = results.map(song => {
      if (song.audio_url && !song.audio_url.startsWith('http')) {
        song.audio_url = `http://localhost:3000/${song.audio_url}`;
      }
      return song;
    });
    res.json(songs);
  });
});

// 🚀 Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
