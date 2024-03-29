import { Box, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react';
import FormCheckoutStep1 from 'dh-marvel/components/checkout/formDataUser.component';
import FormCheckoutStep2 from 'dh-marvel/components/checkout/formDataDirection.component';
import FormCheckoutStep3 from 'dh-marvel/components/checkout/formDataPayment.component';

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
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
        <FormCheckoutStep1 onNext={handleNext} />
      )}

      {activeStep === 1 && (
        <FormCheckoutStep2 onNext={handleNext} onBack={handleBack} />
      )}

      {activeStep === 2 && (
        <FormCheckoutStep3 onBack={handleBack} />
      )}
    </Box>
  );
};

export default CheckoutPage;
