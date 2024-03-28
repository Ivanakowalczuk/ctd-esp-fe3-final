import { Box } from '@mui/material';
import CardPersonaje from 'dh-marvel/components/card/CardPersonaje.component';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import { getCharacter,  getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';



const CardDetailsPersonaje=({ character }: { character: any })=> {
  return (
    <>
      <Head>
        <title>{character?.name} | DH MARVEL</title>
        <meta name="description" content={`${character?.name}: Detalle personaje de cómic`} />
      </Head>
    
        <Box sx={{ margin: '1rem', width: '400' }} >
          <BodySingle title='Detalle personaje'>
            <CardPersonaje
              name={character?.name}
              description={character?.description}
              image={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
              
            />
          </BodySingle>
        </Box >
    
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res: any = await getComics();
    const data = res.data.results
    
    const paths = data.map((character: any) => {
      return { params: { id: character.id.toString() } };
    });
  
    return {
      paths,
      fallback: true,
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = parseInt(params?.id as string);
    const character = await getCharacter(id);
  
    return {
      props: {
        character
      },
      revalidate: 10,
    };
  };
export default CardDetailsPersonaje;