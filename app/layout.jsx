import './globals.css';
import { Montserrat, Unbounded } from '@next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const unbounded = Unbounded({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${(unbounded.className, montserrat.className)}`}>
        <div className="nav">
          <nav>
            <h1>Popular Movies</h1>
          </nav>
        </div>
        <div className="childpages">{children}</div>
        <div className="footer">
          <footer>@zan</footer>
        </div>
      </body>
    </html>
  );
}
