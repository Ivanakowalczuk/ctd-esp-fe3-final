import { Box, Paper, Typography, TextField, Button, FormHelperText } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface DataFormPayment {
  numeroTarjeta: string;
  nombreTitular: string;
  fechaExp: string;
  codigoSeguridad: string;
}

interface Props {
  onBack: () => void; 
   
}

const FormCheckoutStep3: React.FC<Props> = ({ onBack }) => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<DataFormPayment>();

  const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onBack(); 
  };

  const onSubmit = (data: DataFormPayment) => {
    console.log(data);
 
  };

  return (
    <Box component="section" sx={{ width: "700px", marginTop: "50px" }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h4' align='center'>
          Datos de Pago
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.numeroTarjeta && <FormHelperText error>Este campo es requerido</FormHelperText>}
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
          {errors.nombreTitular && <FormHelperText error>Este campo es requerido</FormHelperText>}
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
          {errors.fechaExp && <FormHelperText error>Este campo es requerido</FormHelperText>}
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
          {errors.codigoSeguridad && <FormHelperText error>Este campo es requerido</FormHelperText>}
          <Box display="flex" justifyContent="space-between">
            <Button onClick={handlePrevious} variant='outlined' color='primary'>
              Anterior
            </Button>
            <Button type='submit' variant='contained' color='primary' disabled={!isValid}>
            Enviar
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default FormCheckoutStep3;
