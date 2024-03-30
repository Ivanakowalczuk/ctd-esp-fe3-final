import React,{ useEffect, useState }  from 'react';
import { FormProvider, useForm, } from 'react-hook-form';
import * as yup from 'yup'
import {schema} from 'rules'
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'dh-marvel/components/checkout/form.component';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import { useGlobalStates } from 'context/index.context';


const CheckoutPage = () => {
  const router = useRouter();
  const [comic, setComic] = useState<any>();
  const {comicState} = useGlobalStates()
  console.log(comicState)

  // const [id, setId] = useState<number>(0)

  // const getId = (query: string | string[] | undefined ) => {
  //     setId(parseInt(query as string, 10))

  // }

  // const fetchData = async () => {
  //   try {
  //       getComic(id).then((data:any)=>{
  //       setComic(data)
  //     })
      
  //   } catch (error) {
  //     console.error('Error fetching comic:', error);
  //   }
  // };

  // useEffect(() => {

  //   getId(router.query.id)

  //   if (id === null) {
  //     console.log('id is null')
  //   }else{
  //        fetchData();
  //   }

  // }, [id]);

  // console.log(comic, 'comic');
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
      <Box display="flex" justifyContent={'space-between'}>
     {comic ?
      <Typography>
          {comic}
      </Typography>
      :
      <></>
     }
      
       <Form />
     </Box>
    </FormProvider>
  );
};


export default CheckoutPage;
