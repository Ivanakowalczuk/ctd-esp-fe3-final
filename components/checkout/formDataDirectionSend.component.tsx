import { ErrorMessage } from '@hookform/error-message';
import { Box, Paper, Typography, TextField, Button, FormHelperText } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';




const FormDataDirectionSend = () => {
  const { control, formState: { errors } } = useFormContext();

 
  return (
    <Box component="section" sx={{ width:{xs:'300px', sm: '450px'}, marginTop: "30px" }}>
      <Paper elevation={1} sx={{ p: "25px", display: "flex", flexDirection: "column",  }}>
        <Typography variant='h4' align='center' mb={2}>
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
                             />
            )}
          />
         <Typography  variant='caption' color="error"  mb={1}>
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
             
              />
            )}
          />
           <Typography  variant='caption' color="error"  mb={1}>
          <ErrorMessage name="departamento" errors={errors}/>
          </Typography>

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
                
              />
            )}
          />
          <Typography  variant='caption' color="error" mb={1}>
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
               
              />
            )}
          />
        <Typography  variant='caption' color="error"  mb={1}>
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
              
              />
            )}
          />
            <Typography  variant='caption' color="error"  mb={1}>
          <ErrorMessage name="codigoPostal" errors={errors}/>
          </Typography>

         
        </>
      </Paper>
    </Box>
  );
}

export default FormDataDirectionSend;
