import { Box, Paper, Typography, TextField, Button, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from'yup';
import {yupResolver}  from '@hookform/resolvers/yup'

interface DataFormUser {
  nombre: string;
  apellido: string;
  email: string;
}

interface Props {
  onNext: () => void; // Función para avanzar al siguiente paso
}


const FormCheckoutStep1: React.FC<Props> = ({ onNext }) => {
  const schema = yup.object({
    nombre: yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres').max(20, 'Máximo 20 caracteres'),
    apellido:  yup.string().required('Este campo es obligatorio').min(3, 'Minimo de 3 caracteres').max(20, 'Máximo 20 caracteres'),
    email:  yup.string().required('Este campo es obligatorio').email('El email no es valido').matches(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/),
  })
  
  type DataForm = yup.ISchema<typeof  schema>

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues:{
      nombre: '',
      apellido: '',
      email: '',

    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [dataForm1, setDataForm1] = useState<DataFormUser>()

  const onSubmit = (data: DataFormUser) => {

    setDataForm1(data)
  
    onNext(); 
  };

  return (
    <Box component="section" sx={{ width: "700px", marginTop: "50px" }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h4' align='center'>
          Compra
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="nombre"
            control={control}
            defaultValue=""
             render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Nombre"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
          <Typography  variant='caption' color="error">
          {errors.nombre?.message}
          </Typography>
          <Controller
            name="apellido"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Apellido"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
<Typography variant='caption' color="error"> {errors.apellido?.message}</Typography>
         
          <Controller
            name="email"
            control={control}
            defaultValue=""
             render={({ field }) => (
              <TextField
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
          <Typography variant='caption' color="error">
          {errors.email?.message}
          </Typography>
          <Box display="flex" justifyContent="end">
            <Button type='submit' variant='contained' color='primary' disabled={!isValid}>
              Siguiente
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default FormCheckoutStep1;
