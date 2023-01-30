import Image from 'next/image';

export async function generateStaticParams() {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
	);
	const res = await data.json();
	return res.results.map((Movie) => ({
		Movie: toString(Movie.id),
	}));
}

export default async function MovieDetail({ params }) {
	const { Movie } = params;
	const imgPath = 'https://image.tmdb.org/t/p/original';
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${Movie}?api_key=${process.env.API_KEY}`
		// { next: { revalidate: 0 } }
		// 0 = fetch the data everytime, you go to the page. 60 = after a minute, it's going to refetching the data every min.
	);
	const res = await data.json();
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			<Image
				src={imgPath + res.poster_path}
				width={1000}
				height={1000}
				alt={res.title}
				priority
				style={{
					marginBottom: '30px',
					height: '600px',
					width: 'auto',
				}}
			/>
			<div
				style={{
					paddingLeft: '20px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Image
					src={imgPath + res.backdrop_path}
					width={1000}
					height={1000}
					alt={res.title}
					priority
					style={{
						marginBottom: '30px',
						height: 'auto',
						width: '700px',
					}}
				/>
				<h1>{res.title}</h1>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						margin: '10px 0',
					}}
				>
					<h4>Release Date: {res.release_date}</h4>
					<h4>Runtime: {res.runtime} min</h4>
				</div>
				<div
					style={{
						backgroundColor: 'darkgreen',
						width: '100%',
						height: '40px',
						marginBottom: '10px',
						borderRadius: '15px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h4
						style={{
							textTransform: 'uppercase',
						}}
					>
						{res.status}
					</h4>
				</div>
				<p>{res.overview}</p>
			</div>
		</div>
	);
}
