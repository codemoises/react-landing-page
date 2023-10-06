/* eslint-disable react/jsx-key */
import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { useLocation } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = pathname ? pathname : 'landing-page';

    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/pages/?slug=' + slug);
        const json = await data.json();
        const pageData = mapData();
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }

      load();
    };
  }, [location]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { componet } = section;
        const key = `${slug}-${index}`;

        if (componet === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (componet === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (componet === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (componet === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
