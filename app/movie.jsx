import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ id, title, poster_path, release_date }) {
	const imgPath = 'https://image.tmdb.org/t/p/original';
	return (
		<div>
			<div>
				<h4>
					{/* {title} */}
					{title.length > 30 ? `${title.substring(0, 30)}...` : title}
				</h4>
				<p>{release_date}</p>
			</div>
			<Link href={`${id}`}>
				<Image
					src={imgPath + poster_path}
					width={280}
					height={400}
					alt={title}
					priority
				/>
			</Link>
		</div>
	);
}
