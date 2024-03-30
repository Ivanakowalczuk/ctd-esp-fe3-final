import { ErrorMessage } from '@hookform/error-message';
import { Box, Paper, Typography, TextField, Button, FormHelperText } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';




const FormDataDirectionSend = () => {
  const { control, formState: { errors } } = useFormContext();

 
  return (
    <Box component="section" sx={{ width: "700px", marginTop: "50px" }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h4' align='center'>
          Dirección de entrega
        </Typography>

        <>
          <Controller
            name="direccion"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Dirección"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
         <Typography  variant='caption' color="error">
          <ErrorMessage name="direccion" errors={errors}/>
          </Typography>

          <Controller
            name="departamento"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Departamento"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />

          <Controller
            name="provincia"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Provincia"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
          <Typography  variant='caption' color="error">
          <ErrorMessage name="provincia" errors={errors}/>
          </Typography>
          <Controller
            name="ciudad"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Ciudad"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
        <Typography  variant='caption' color="error">
          <ErrorMessage name="ciudad" errors={errors}/>
          </Typography>
          <Controller
            name="codigoPostal"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="string"
                label="Código Postal"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
            <Typography  variant='caption' color="error">
          <ErrorMessage name="codigoPostal" errors={errors}/>
          </Typography>

         
        </>
      </Paper>
    </Box>
  );
}

export default FormDataDirectionSend;
