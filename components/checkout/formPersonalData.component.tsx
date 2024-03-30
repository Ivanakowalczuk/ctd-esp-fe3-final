import { ErrorMessage } from '@hookform/error-message';
import { Box, Paper, Typography, TextField, Button, } from '@mui/material';
import React from 'react';
import { Controller,  useFormContext } from 'react-hook-form';



const FormPersonalData = () => {
    
  const {control, formState:{errors}} = useFormContext()


  return (
    <Box component="section" sx={{ width: "700px", marginTop: "50px" }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h4' align='center'>
          Compra
        </Typography>
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
          <ErrorMessage name="nombre" errors={errors}/>
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
        <Typography variant='caption' color="error"> 
            <ErrorMessage name="apellido" errors={errors}/>
        </Typography>
         
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
          <ErrorMessage name="email" errors={errors}/>
          </Typography>
    
      </Paper>
    </Box>
  );
}

export default FormPersonalData;
