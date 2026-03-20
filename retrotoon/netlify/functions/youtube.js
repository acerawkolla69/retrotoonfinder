exports.handler = async (event) => {
  const { query } = event.queryStringParameters || {};
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=5&type=video&videoEmbeddable=true&key=${process.env.YOUTUBE_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};