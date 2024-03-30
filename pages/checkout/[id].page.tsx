import React,{ useEffect, useState }  from 'react';
import { FormProvider, useForm, } from 'react-hook-form';
import * as yup from 'yup'
import {schema} from 'rules'
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'dh-marvel/components/checkout/form.component';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useGlobalStates } from 'context/index.context';
import { getCharactersComic, getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import { GetStaticPaths, GetStaticProps } from 'next';
import CardDetails from 'dh-marvel/components/card/CardDetails.component';
import CardComicCheckout from 'dh-marvel/components/card/cardComicCheckout.component';



const CheckoutPage = ({ comic, characters }: { comic: any, characters: any }) => {
  const router = useRouter();
  const id = router?.query?.id
  
  const {comicState} = useGlobalStates()
  console.log(comicState)

  type DataForm = yup.InferType<typeof  schema>

  const methods = useForm<DataForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      nombre:"",
      apellido:"",
      email:"",
      direccion: "",
      departamento: "",
      provincia: "",
      ciudad: "",
      codigoPostal: "", 
      numeroTarjeta: "",
      nombreTitular: "",
      fechaExp: "",
      codigoSeguridad:"",

    }
  })


  return (
    <FormProvider {...methods}>
     <Box>
     
    <CardComicCheckout  title={comic.title} id={comic.id} thumbnail={comic.thumbnail} price={comic.price} />


  
      
      </Box>
     
      <Box display="flex" justifyContent={'space-between'}>
           
      <Form />
     </Box>
    </FormProvider>
  );
};
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



export default CheckoutPage;
