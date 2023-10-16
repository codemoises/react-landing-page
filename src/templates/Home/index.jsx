import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { useLocation } from 'react-router-dom';
import config from '../../config';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathname ? pathname : 'landing-page';

      try {
        const data = await fetch(
          'https://strapi-v4-9tc4.onrender.com/api/pages/?filters%20[slug]=landing-page&populate=deep',
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, [location.pathname]);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
