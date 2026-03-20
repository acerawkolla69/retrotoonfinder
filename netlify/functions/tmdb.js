exports.handler = async (event) => {
  const { path, query } = event.queryStringParameters || {};
  const url = `https://api.themoviedb.org/3/${path}${query ? '?' + query : ''}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.TMDB_TOKEN}` }
  });

  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};