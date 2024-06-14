const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const url = genre === "fetchTopRated"
    ? `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    : `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  const results = data.results;
  console.log(results);

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.title || result.name}</h2>
          <p>{result.overview}</p>
        </div>
      ))}
    </div>
  );
}
