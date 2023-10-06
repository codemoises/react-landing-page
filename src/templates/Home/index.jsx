/* eslint-disable react/jsx-key */
import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loanding } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

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
