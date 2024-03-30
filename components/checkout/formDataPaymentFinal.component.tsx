import { ErrorMessage } from '@hookform/error-message';
import { Box, Paper, Typography, TextField, Button, FormHelperText } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';



const FormDataPaymentFinal = () => {
  const { control, formState: { errors} } = useFormContext()


  return (
    <Box component="section" sx={{ width: "700px", marginTop: "50px" }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h4' align='center'>
          Datos de Pago
        </Typography>

        
          <Controller
            name="numeroTarjeta"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Número de Tarjeta"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
            <Typography  variant='caption' color="error">
          <ErrorMessage name="numeroTarjeta" errors={errors}/>
          </Typography>
          <Controller
            name="nombreTitular"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Nombre de Titular"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
        
          <Controller
            name="fechaExp"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="dd/aaaa"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
          <Typography  variant='caption' color="error">
          <ErrorMessage name="fechaExp" errors={errors}/>
          </Typography>
          <Controller
            name="codigoSeguridad"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="text"
                label="Código de seguridad"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
            )}
          />
          <Typography  variant='caption' color="error">
          <ErrorMessage name="codigoSeguridad" errors={errors}/>
          </Typography>
            
      </Paper>
    </Box>
  );
}

export default FormDataPaymentFinal;
