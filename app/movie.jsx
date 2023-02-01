import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ id, title, poster_path, release_date }) {
	const imgPath = 'https://image.tmdb.org/t/p/original';
	return (
    <div>
      <Link href={`${id}`}>
        <Image
          src={imgPath + poster_path}
          width={280}
          height={400}
          alt={title}
          priority
          style={{
            boxShadow: '2px 2px 25px black',
          }}
        />
      </Link>
      <div style={{ padding: '10px' }}>
        <h4>{title.length > 30 ? `${title.substring(0, 30)}...` : title}</h4>
        <p style={{ color: '#888' }}>{release_date}</p>
      </div>
    </div>
  );
}
