import { Box, Typography } from '@mui/material'
import CardComicCheckout from 'dh-marvel/components/card/cardComicCheckout.component'
import React from 'react'
import {  getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';

const ConfirmacionCompra= ({ comic }: { comic: any }) => {
  return (
 
    <Box display={"flex"} justifyContent={'center'} flexDirection="column" alignItems={'center'}>
      <Box  sx={{background:"green", borderRadius:2, p:2, width:"250px"}}>
       <Typography variant='h6' color="white">Que disfrutes tu compra</Typography>  
     </Box>
        <CardComicCheckout   title={comic.title} id={comic.id} thumbnail={comic.thumbnail} price={comic.price}  />
    </Box>
 
  )
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
  
      return {
        props: {
          comic,
         
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
  

export default ConfirmacionCompra