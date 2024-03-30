import { Box } from '@mui/material';
import CardDetails from 'dh-marvel/components/card/CardDetails.component';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { getCharactersComic, getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useGlobalStates } from 'context/index.context';
import { useEffect } from 'react';


const ComicDetails=({ comic, characters }: { comic: any, characters: any }) =>{
  const {comicDispatch, comicState} = useGlobalStates()
  const addComic = () => {
    comicDispatch ({type: 'GET_COMIC', payload: comic})
  }

useEffect(()=>{
  try {
    if(comic){
      addComic()
    }
  } catch (error) {
    console.log(error, 'no  se guardó el comic')
  }
  
},[comic.id])
  
  if (!comic) {
    return (
      <>
        <Head>
          <title>Error | DH MARVEL</title>
          <meta name="description" content="Error" />
        </Head>
        <LayoutGeneral >
          <Box sx={{ marginBottom: '2rem' }}>
            <BodySingle title='Error'>
              <p>Hubo un error al cargar el cómic.</p>
            </BodySingle>
          </Box>
        </LayoutGeneral>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{comic?.title} | DH MARVEL</title>
        <meta name="description" content={`${comic?.title}: detalle de cómic`} />
      </Head>
     
        <Box sx={{  marginBottom: '1rem' }}>
          <BodySingle title='Detalle cómic'   >
            <CardDetails
              title={comic?.title}
              description={comic?.description}
              image={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`}
              id={comic?.id}
              price={comic?.price}
              oldPrice={comic?.oldPrice}
              stock={comic?.stock}
              characters={characters}
            />
          </BodySingle>
        </Box>
     
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await getComics();

    const paths = response?.data?.results?.map(({ id }: { id: number }) => ({
      params: {
        id: id?.toString()
      }
    }));

    return {
      paths: paths || [],
      fallback: 'blocking'
    };
  } catch (error) {
    console.error('Error retrieving comics for paths:', error);
    return {
      paths: [],
      fallback: 'blocking'
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = parseInt(params?.id as string, 10);
    const comic = await getComic(id);
    const characters = await getCharactersComic(id);

    return {
      props: {
        comic,
        characters
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error retrieving comic and characters:', error);
    return {
      notFound: true
    };
  }
};

export default ComicDetails;