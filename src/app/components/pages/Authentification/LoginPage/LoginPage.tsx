/* // components/LoginForm.js
'use client'
import React, {useState} from 'react';
import { TextField, Button, Checkbox, Alert, styled } from '@mui/material';

const FormContainer = styled('div')(
{
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  justifyContent : 'center',
  height : '100vh'
});

const StyledForm = styled('form')({
  width: '80%',
  maxWidth: '400px',
  padding: '20px',
  borderRadius: '10px',
  border: '2px solid #1E3A8A',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#ffffff',
  textAlign: 'center',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
});
const LoginForm1 = () => {
  const {register, handleSubmit, formState,:{errors}} = useForm();

  return (
    <>
      <FormContainer>
        <StyledForm>
          <StyledTextField
            label = "Username"
            type = "text"
          />
           <StyledTextField
            label = "Password"
            type = "password"
          />
          <Button
            type='submit'
            variant='contained'
            color ='primary'
            margin='5px'
          >Submit</Button>
        </StyledForm>
      </FormContainer>
    </>
  );
};

export default LoginForm1;
 */