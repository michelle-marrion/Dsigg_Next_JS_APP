import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const [pages, setPages] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
   fetch('api/pages')
   .then(response => response.json())
   .then(data => setPages(data.pages));
  }, []);

  return (
    <nav style={{marginTop:'10px'}}>
      <p>Hello</p>
      {pages.map(page => (
        <Link 
        key={page} 
        href={`/${page}`}
        style={{
            textDecoration:'none',
            color: 'black',
            padding:'1px'
        }}>
          <a className={router.pathname === `/${page}` ? 'active' : ''}>{page}</a>
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;