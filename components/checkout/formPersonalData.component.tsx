import { ErrorMessage } from '@hookform/error-message';
import { Box, Paper, Typography, TextField, Button, } from '@mui/material';
import React from 'react';
import { Controller,  useFormContext } from 'react-hook-form';



const FormPersonalData = () => {
    
  const {control, formState:{errors}} = useFormContext()


  return (
    <Box component="section" sx={{ width: "500px", marginTop: "10px" }}>
      <Paper elevation={1} sx={{ p: "25px", display: "flex", flexDirection: "column", gap: 0.5 }}>
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
               
              />
            )}
          />
          <Typography  variant='caption' color="error"  mb={2}>
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
          
              />
            )}
          />
        <Typography variant='caption' color="error"  mb={2}> 
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
                
              />
            )}
          />
          <Typography variant='caption' color="error" mb={2}>
          <ErrorMessage name="email" errors={errors}/>
          </Typography>
    
      </Paper>
    </Box>
  );
}

export default FormPersonalData;
