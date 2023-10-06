import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loanding } from '../Loading';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/pages/?slug=landing-page',
        );
        const json = await data.json();
        const pageData = mapData();
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }

      load();
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loanding />;
  }

  return <Base {...mockBase} />;
}

export default Home;
