const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// ── TMDB proxy ────────────────────────────────────────────────────────
app.get('/api/tmdb', async (req, res) => {
  try {
    const { path: apiPath, query } = req.query;
    if (!apiPath) return res.status(400).json({ error: 'Missing path' });

    const url = `https://api.themoviedb.org/3/${apiPath}${query ? '?' + query : ''}`;
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Watchmode proxy ───────────────────────────────────────────────────
app.get('/api/watchmode', async (req, res) => {
  try {
    const { path: apiPath, query } = req.query;
    if (!apiPath) return res.status(400).json({ error: 'Missing path' });

    const sep = query ? '&' : '';
    const url = `https://api.watchmode.com/v1/${apiPath}/?apiKey=${process.env.WATCHMODE_KEY}${sep}${query || ''}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── YouTube proxy ─────────────────────────────────────────────────────
app.get('/api/youtube', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ error: 'Missing query' });

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=5&type=video&videoEmbeddable=true&key=${process.env.YOUTUBE_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── Fallback: serve index.html for any unmatched route ────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`RetroToonFinder running on port ${PORT}`);
});
