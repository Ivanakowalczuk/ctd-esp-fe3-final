import { Box, Step, StepLabel, Stepper, Button } from '@mui/material';
import React, { useState } from 'react';
import {  useFormContext } from 'react-hook-form';
import FormPersonalData from '../../components/checkout/formPersonalData.component';
import FormDataDirectionSend from 'dh-marvel/components/checkout/formDataDirectionSend.component';
import FormDataPaymentFinal from 'dh-marvel/components/checkout/formDataPaymentFinal.component';






const Form = () => {
  const {handleSubmit} = useFormContext()
  const [activeStep, setActiveStep] = useState(0);

 const onSubmit = (data:any)=>{
    console.log(data)
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
 <form onSubmit={handleSubmit(onSubmit)}>
    <Box mt={10} height={'auto'}>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>1</StepLabel>
        </Step>
        <Step>
          <StepLabel>2</StepLabel>
        </Step>
        <Step>
          <StepLabel>3</StepLabel>
        </Step>
      </Stepper>

      {activeStep === 0 && (
        <FormPersonalData  />
      )}

      {activeStep === 1 && (
        <FormDataDirectionSend />
      )}

      {activeStep === 2 && (
        <FormDataPaymentFinal />
      )}
    </Box>
    <Box display="flex" justifyContent="space-around" mt={2} mb={2}>
           {activeStep > 0 ?
            <Button type='button' variant='outlined' color='primary' onClick={handleBack}>
              Anterior
            </Button>
            :
            <></>
             }
            {activeStep === 2 ?
            <Button type='submit' variant='contained' color='primary' >
            Enviar
           </Button>
           :
            <Button onClick={handleNext} variant='contained' color='primary' >
              Siguiente
            </Button>
            }
          </Box>
       
      </form>
   
  );
};

export default Form;
