# 🎵 MoodWave - Music for Every Mood

A neon-themed music player that matches your mood with curated playlists. Built with Node.js, Express, MySQL, and vanilla JavaScript.

## 🌐 Live Demo

**GitHub Pages (Static - Backend Required):**
👉 **https://bankutech.github.io/Moodwave/**

Music will play directly from the repository when accessed via GitHub Pages.

## 🚀 Local Development

### Prerequisites
- Node.js v14+
- MySQL Server running
- Git

### Complete Setup from Scratch

If you're starting fresh or restoring from the repo, follow these steps exactly:

#### Step 1: Clone the Repository
```bash
git clone https://github.com/bankutech/Moodwave.git
cd Moodwave
```

#### Step 2: Install Dependencies
```bash
cd public/backend
npm install
cd ../..
```

#### Step 3: Create MySQL Database & Tables

Open MySQL terminal and run:
```sql
CREATE DATABASE mood;
USE mood;

CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  artist VARCHAR(150),
  mood VARCHAR(50),
  audio_url VARCHAR(255)
);

INSERT INTO songs (title, artist, mood, audio_url) VALUES
-- Chill Mood
('Navjaxx - Embrace', 'Navjaxx', 'Chill', 'backend/music/Navjaxx - Embrace (4K Official Music Video) - Navjaxx.mp3'),
('Navjaxx, VXLLAIN - Distant Memories', 'Navjaxx & VXLLAIN', 'Chill', 'backend/music/Navjaxx, VXLLAIN - Distant Memories (4K Official Music Video) - Navjaxx.mp3'),
('Mr.Kitty - After Dark (Slowed + Rain Effect)', 'Ava Rinzler', 'Chill', 'backend/music/Mr.Kitty - After Dark (Slowed to Perfection + Rain Effect) - Ava Rinzler.mp3'),

-- Focus Mood
('VØJ, Narvent - Memory Reboot', 'VØJ & Narvent', 'Focus', 'backend/music/VØJ, Narvent - Memory Reboot (4K Music Video) - Narvent.mp3'),
('20 Minutes of Calm and Inspiring Funk', 'MironN', 'Focus', 'backend/music/20 Minutes of Calm and Inspiring Fonk  Best Aura  Phonk music  Brazilian Phonk remix - MironN.mp3'),
('Activate Your Brain Potential', 'BrainSync', 'Focus', 'backend/music/Activate Your Brain Potential  30 minutes deep focus  Improve Memory & Intelligence - BrainSync Focus Music.mp3'),

-- Energetic Mood
('AIRTEL PHONK', 'Mashuq Haque', 'Energetic', 'backend/music/AIRTEL PHONK - Mashuq Haque.mp3'),

-- Night Mood
('Nonstop Arijit Singh Mashup', 'Lofi Boy', 'Night', 'backend/music/Nonstop Arjit Singh Mashup  Remix  Saturday Special  Lofi Boy - Lofi boy (1).mp3'),
('Late Night - SAD CHILL Lofi Piano Beat', 'Rude Boy', 'Night', 'backend/music/Late Night - (EA7) SAD CHILL Lofi Piano Beat - Rude Boy.mp3'),
('1 Hour Of Night Hindi Lofi Songs', 'indianmusicalvideos', 'Night', 'backend/music/1 Hour Of Night Hindi Lofi Songs To Study _Chill _Relax _Refreshing - indianmusicalvideos.mp3'),

-- Happy Mood
('Stellar Fission', 'SuperImpose', 'Happy', 'backend/music/Stellar Fission  Oppenheimer X Interstellar Music Mix - SuperImpose.mp3'),
('Happy Nation Phonk', 'x3L', 'Happy', 'backend/music/Happy Nation Phonk - x3L.mp3'),

-- Sad Mood
('Distant Echoes (Slowed + Reverb)', 'VXLLAIN', 'Sad', 'backend/music/Distant Echoes (Slowed + Reverb) - VXLLAIN.mp3');
```

**OR** use the SQL file directly:
```bash
mysql -u root -p < database.sql
```

#### Step 4: Configure Environment Variables

Create `.env` file in the root directory:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=mood
PORT=3001
```

Create `.env.example` (for sharing):
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=mood
PORT=3001
```

#### Step 5: Add Music Files

Copy your music files to: `public/backend/music/`

Required files:
```
public/backend/music/
├── Navjaxx - Embrace (4K Official Music Video) - Navjaxx.mp3
├── Navjaxx, VXLLAIN - Distant Memories (4K Official Music Video) - Navjaxx.mp3
├── Mr.Kitty - After Dark (Slowed to Perfection + Rain Effect) - Ava Rinzler.mp3
├── VØJ, Narvent - Memory Reboot (4K Music Video) - Narvent.mp3
├── 20 Minutes of Calm and Inspiring Fonk  Best Aura  Phonk music  Brazilian Phonk remix - MironN.mp3
├── Activate Your Brain Potential  30 minutes deep focus  Improve Memory & Intelligence - BrainSync Focus Music.mp3
├── AIRTEL PHONK - Mashuq Haque.mp3
├── Nonstop Arjit Singh Mashup  Remix  Saturday Special  Lofi Boy - Lofi boy (1).mp3
├── Late Night - (EA7) SAD CHILL Lofi Piano Beat - Rude Boy.mp3
├── 1 Hour Of Night Hindi Lofi Songs To Study _Chill _Relax _Refreshing - indianmusicalvideos.mp3
├── Stellar Fission  Oppenheimer X Interstellar Music Mix - SuperImpose.mp3
├── Happy Nation Phonk - x3L.mp3
└── Distant Echoes (Slowed + Reverb) - VXLLAIN.mp3
```

#### Step 6: Start the Backend Server
```bash
cd public/backend
node server.js
```

You should see:
```
🚀 Server running at http://localhost:3001
✅ MySQL connected
```

#### Step 7: Access the Application

Open in your browser:
- **Home:** http://localhost:3001
- **Mood Selector:** http://localhost:3001/mood.html
- **Specific Moods:**
  - http://localhost:3001/happy.html
  - http://localhost:3001/chill.html
  - http://localhost:3001/sad.html
  - http://localhost:3001/energetic.html
  - http://localhost:3001/focus.html
  - http://localhost:3001/night.html

## 🎯 Quick Reference Commands

### First-Time Setup
```bash
# Clone repo
git clone https://github.com/bankutech/Moodwave.git
cd Moodwave

# Install backend dependencies
cd public/backend && npm install && cd ../..

# Create .env file (copy from .env.example and update)
copy .env.example .env

# Start backend
cd public/backend && node server.js
```

### Daily Development
```bash
# Start backend
cd public/backend
node server.js

# Open in browser
http://localhost:3001

# Stop backend
Ctrl+C
```

### Database Management
```bash
# Connect to MySQL
mysql -u root -p

# Create database
CREATE DATABASE mood;

# Import schema
mysql -u root -p mood < database.sql

# View songs
SELECT * FROM songs;

# Add new song
INSERT INTO songs (title, artist, mood, audio_url) VALUES ('Song', 'Artist', 'Happy', 'backend/music/filename.mp3');
```

### Git Operations
```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

### Troubleshooting Commands
```bash
# Check if port 3001 is in use
netstat -ano | findstr ":3001"

# Check if MySQL is running
mysql -u root -p -e "SELECT 1;"

# View backend logs
cd public/backend && npm start

# Clear node_modules and reinstall
cd public/backend && rm -r node_modules && npm install
```

```
Moodwave/
├── public/                    # Frontend files
│   ├── index.html            # Landing page with hero
│   ├── mood.html             # Mood selector grid
│   ├── happy.html            # Happy mood player
│   ├── chill.html            # Chill mood player
│   ├── sad.html              # Sad mood player
│   ├── energetic.html        # Energetic mood player
│   ├── focus.html            # Focus mood player
│   ├── night.html            # Night mood player
│   ├── extra.html            # Extra page
│   ├── songs.json            # Fallback song data for GitHub Pages
│   └── backend/
│       ├── server.js         # Express API server (main entry point)
│       ├── package.json      # Node dependencies
│       ├── package-lock.json
│       └── music/            # Audio files (add your MP3s here)
│
├── docs/                      # GitHub Pages (copy of public/)
│   ├── *.html                # Same HTML files
│   ├── songs.json            # Static song data
│   └── backend/              # Copied backend structure (music not included)
│
├── .env                       # Local environment variables (not committed)
├── .env.example              # Template for environment variables
├── .gitignore                # Git ignore rules (excludes .env, music, node_modules)
├── database.sql              # MySQL schema and seed data
├── README.md                 # This file
└── package.json              # Root package.json (if applicable)
```

## 🎵 Database Schema

### songs table
```sql
CREATE TABLE songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  artist VARCHAR(150),
  mood VARCHAR(50),
  audio_url VARCHAR(255)
);
```

**Columns:**
- `id`: Unique identifier (auto-incremented)
- `title`: Song name
- `artist`: Artist/composer name
- `mood`: One of: Happy, Chill, Sad, Energetic, Focus, Night
- `audio_url`: Path to audio file (relative to backend)

## 🎵 Features

- **6 Mood Playlists:** Happy, Chill, Sad, Energetic, Focus, Night
- **Visualizer:** Real-time audio frequency visualization
- **Shuffle Mode:** Randomize playback order
- **Previous/Next Controls:** Easy navigation between songs
- **Responsive Design:** Works on desktop and mobile
- **Dual Mode:**
  - **Local:** Backend API provides real-time song data from MySQL
  - **GitHub Pages:** Static JSON fallback for remote access

## 🔧 API Endpoints

### Get Songs by Mood
```
GET /songs?mood=<Mood>
```

**Parameters:**
- `mood` (optional): Filter by mood (Happy, Chill, Sad, Energetic, Focus, Night)

**Response:**
```json
[
  {
    "id": 1,
    "title": "Song Title",
    "artist": "Artist Name",
    "mood": "Happy",
    "audio_url": "http://localhost:3001/music/filename.mp3"
  }
]
```

### Serve Music Files
```
GET /music/<filename>
```

**Example:**
- http://localhost:3001/music/Happy%20Nation%20Phonk%20-%20x3L.mp3

## 🆘 Troubleshooting

### Backend not starting
```
Error: Cannot find module 'express'
```
**Solution:** Install dependencies
```bash
cd public/backend
npm install
```

### MySQL connection fails
```
Error: MySQL connection failed: Error: connect ECONNREFUSED 127.0.0.1:3306
```
**Solution:** Ensure MySQL is running
```bash
# Windows
net start MySQL80
# or start from Services

# macOS
brew services start mysql
# or
mysql.server start

# Linux
sudo systemctl start mysql
```

### Port 3001 already in use
```
Error: listen EADDRINUSE: address already in use :::3001
```
**Solution:** Kill process using port 3001
```bash
# Windows PowerShell
netstat -ano | findstr ":3001"
taskkill /F /PID <PID_NUMBER>

# macOS/Linux
lsof -i :3001
kill -9 <PID>
```

### Songs not loading on GitHub Pages
- Ensure `docs/songs.json` exists
- Check browser console (F12) for errors
- Verify music files are in `public/backend/music/`
- Wait 1-2 minutes after push for GitHub Pages to rebuild

### No audio playing locally
- Check if music files exist in `public/backend/music/`
- Verify file names match database.sql exactly
- Open browser console to see error messages
- Test API: http://localhost:3001/songs?mood=Happy

## 📋 Moods and File Names

When adding new songs, use these exact mood values in the database:
- `Happy` - Upbeat, energetic, feel-good music
- `Chill` - Relaxing, calm, lo-fi beats
- `Sad` - Emotional, slow, melancholic tracks
- `Energetic` - High-energy, fast-paced, pumped-up music
- `Focus` - Concentration music, ambient, instrumental
- `Night` - Late-night vibes, late-night lo-fi, dark atmosphere

## 🔐 Security Checklist

Before deploying to production:
- [ ] Change MySQL password in `.env`
- [ ] Never commit `.env` file (use `.gitignore`)
- [ ] Always use `.env.example` as template
- [ ] Use HTTPS for remote deployment
- [ ] Validate all user inputs on backend
- [ ] Set up firewall rules for database access
- [ ] Enable CORS only for trusted domains
- [ ] Use environment variables for all secrets

## 🎨 Mood Colors

- **Happy:** Magenta/Pink gradient
- **Chill:** Blue gradient
- **Sad:** Purple gradient
- **Energetic:** Orange/Red gradient
- **Focus:** Cyan/Teal gradient
- **Night:** Dark blue/Purple gradient

## 🔐 Security

- Database credentials stored in `.env` (not committed to Git)
- `.gitignore` prevents sensitive files from being uploaded
- Use `.env.example` as a template for setup

## 📚 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Hosting:** GitHub Pages (static) + Local Node.js (dynamic)
- **Audio Visualization:** Web Audio API

## 🤝 Contributing

Feel free to fork, modify, and create pull requests!

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] Spotify API integration
- [ ] User authentication and playlists
- [ ] Cloud deployment
- [ ] Mobile app version
- [ ] Search and filter functionality
- [ ] Playlist creation and sharing

---

**Made with 🎵 by bankutech**
