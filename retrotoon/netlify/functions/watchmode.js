exports.handler = async (event) => {
  const { path, query } = event.queryStringParameters || {};
  const sep = query ? '&' : '';
  const url = `https://api.watchmode.com/v1/${path}/?apiKey=${process.env.WATCHMODE_KEY}${sep}${query || ''}`;

  const res = await fetch(url);
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};