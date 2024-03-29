import { Box, Paper, Typography, TextField, Button, FormHelperText } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface DataFormDirection {
  direccion: string;
  departamento: string;
  provincia: string;
  ciudad: string;
  codigoPostal: string;
}

interface Props {
  onBack: () => void; // Función para volver al paso anterior
  onNext: () => void; // Función para avanzar al siguiente paso
}

const FormCheckoutStep2: React.FC<Props> = ({ onBack, onNext }) => {
  const { control, handleSubmit, formState: { errors, isValid } } = useForm<DataFormDirection>();
  const [dataForm2, setDataForm2] = useState<DataFormDirection>()

  const onSubmit = (data: DataFormDirection) => {
  setDataForm2(data)
  console.log(dataForm2)
    onNext(); // Llama a la función onNext para avanzar al siguiente paso
  };

  return (
    <Box component="section" sx={{ width: "700px", marginTop: "50px" }}>
      <Paper elevation={1} sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant='h4' align='center'>
          Dirección de entrega
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.direccion && <FormHelperText error>Este campo es requerido</FormHelperText>}

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
          {errors.departamento && <FormHelperText error>Este campo es requerido</FormHelperText>}

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
          {errors.provincia && <FormHelperText error>Este campo es requerido</FormHelperText>}

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
          {errors.ciudad && <FormHelperText error>Este campo es requerido</FormHelperText>}

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
          {errors.codigoPostal && <FormHelperText error>Este campo es requerido</FormHelperText>}

          <Box display="flex" justifyContent="space-between">
            <Button type='button' variant='outlined' color='primary' onClick={onBack}>
              Anterior
            </Button>
            <Button type='submit' variant='contained' color='primary' disabled={!isValid}>
              Siguiente
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default FormCheckoutStep2;
