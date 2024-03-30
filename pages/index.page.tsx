import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import { getComics } from 'dh-marvel/services/marvel/marvel.service';
import { Grid, Box, Pagination } from '@mui/material';
import CardComic from 'dh-marvel/components/card/CardComic.component';


const Index: NextPage<Props> = ({ comics, totalComics }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 12;
  const totalPages = Math.ceil(totalComics / comicsPerPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * comicsPerPage;
  const endIndex = startIndex + comicsPerPage;
  const comicsToShow = comics.slice(startIndex, endIndex);

  
  return (
    <>
      <Head>
        <title>Marvel Comics</title>
        <meta name="description" content="Marvel Comics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle title={'Sample'}>
        <Grid  container spacing={2}>
          {comicsToShow.map((comic) => (
            <Grid display="flex" justifyContent="center" alignItems="center" item xs={12} sm={6} md={4} key={comic.id}>
              <CardComic title={comic.title} id={comic.id} thumbnail={comic.thumbnail} price={comic.price}/>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4, marginBottom: 4 }}>
          <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" />
        </Box>
      </BodySingle>
    </>
  );
};

export interface IComics {
  title: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  id: string;
  price?: number;
}

interface Props {
  comics: IComics[];
  totalComics: number;
}

export const getServerSideProps = async () => {
  const offset = 0;
  const limit = 100; // Obtén suficientes cómics para calcular el total
  const data = await getComics(offset, limit);
  const comics: IComics[] = data.data.results;
  const totalComics: number = data.data.total;

  return {
    props: {
      comics,
      totalComics,
    },
  };
};

export default Index;
