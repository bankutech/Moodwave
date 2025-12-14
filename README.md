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

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/bankutech/Moodwave.git
cd Moodwave
```

2. **Install dependencies:**
```bash
cd public/backend
npm install
cd ../..
```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Update `.env` with your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=mood
   PORT=3001
   ```

4. **Initialize the database:**
   - Import `database.sql` into MySQL:
   ```bash
   mysql -u root -p mood < database.sql
   ```

5. **Start the backend server:**
```bash
cd public/backend
node server.js
```

6. **Open in browser:**
   - Navigate to `http://localhost:3001`
   - Click "Get Started" or go directly to `http://localhost:3001/mood.html`
   - Select a mood to play music!

## 📁 Project Structure

```
Moodwave/
├── public/                    # Frontend files
│   ├── *.html                # Mood pages (happy, chill, sad, etc.)
│   ├── index.html            # Landing page
│   ├── mood.html             # Mood selector
│   ├── songs.json            # Fallback songs data
│   └── backend/
│       ├── server.js         # Express API server
│       ├── package.json      # Backend dependencies
│       └── music/            # Audio files
├── docs/                      # GitHub Pages content (copy of public/)
├── database.sql              # MySQL schema and seed data
├── .env                       # Environment variables (local only)
├── .env.example              # Environment template
└── README.md                 # This file
```

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
