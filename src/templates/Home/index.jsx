import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/pages/?slug=landing-page',
      );
      const json = await data.json();
      const pageData = mapData();
      setData(pageData[0]);

      load();
    };
  }, []);

  if (data === undefined) {
    return <h1>Página não encontrada</h1>;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
