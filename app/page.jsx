import Movie from './movie';

export default async function Home() {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	);
	const res = await data.json();
	return (
    <main>
      <h1 style={{ margin: '80px 0px 30px 0px' }}>Popular Movies</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(15rem,1fr))',
          columnGap: '56px',
          rowGap: '16px',
        }}
      >
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
