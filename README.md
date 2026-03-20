# RetroToonFinder

**The complete couch potato's guide to streaming retro Saturday morning cartoons.**

Live at [retrotoonfinder.com](https://retrotoonfinder.com)

---

## What It Is

A TV Guide-style schedule app covering 5 eras of Saturday morning cartoons (1969–1999). Click any show to get:

- TMDB poster, description, ratings, episode count
- Live streaming availability via Watchmode
- Theme song via YouTube
- Direct "Find Episodes on YouTube" search link
- Era selector with poster mosaic backgrounds

---

## Tech Stack

- **Frontend** — Single-page HTML/CSS/JS, no framework
- **Backend** — Node.js + Express (API proxy server)
- **APIs** — TMDB, Watchmode, YouTube Data API v3
- **Fonts** — Oswald, Special Elite, Playfair Display (Google Fonts)
- **Hosting** — Hostinger Node.js Web App

---

## Project Structure

```
retrotoonfinder/
├── server.js           — Express server, API proxy, static file serving
├── package.json
├── .gitignore
└── public/
    ├── index.html      — Entire frontend (single file)
    └── ads.txt         — Google AdSense verification
```

---

## Local Development

1. Clone the repo
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file at the root:
   ```
   TMDB_TOKEN=your_tmdb_read_access_token
   WATCHMODE_KEY=your_watchmode_api_key
   YOUTUBE_KEY=your_youtube_data_api_v3_key
   ```
4. Start the server:
   ```
   npm start
   ```
5. Visit `http://localhost:3000`

---

## Deploying to Hostinger

1. Zip the project (excluding `node_modules`)
2. Upload via hPanel → Node.js Apps
3. Set start command: `npm start`
4. Add environment variables in hPanel:
   - `TMDB_TOKEN`
   - `WATCHMODE_KEY`
   - `YOUTUBE_KEY`
5. Deploy

---

## API Keys

| Service | Where to get it | Used for |
|---------|----------------|----------|
| TMDB | [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) | Posters, descriptions, ratings |
| Watchmode | [api.watchmode.com](https://api.watchmode.com) | Streaming availability |
| YouTube | [console.cloud.google.com](https://console.cloud.google.com) → YouTube Data API v3 | Theme songs |

---

## Credits

- Show data powered by [TMDB](https://www.themoviedb.org/)
- Streaming data powered by [Watchmode](https://api.watchmode.com/)
- Built with ☕ and nostalgia by [RetroToonFinder](https://retrotoonfinder.com)
