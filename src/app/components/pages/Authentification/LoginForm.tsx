// LoginForm.js
import React, { ChangeEvent, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  CssBaseline,
  InputLabel,
  Select,
  MenuItem
  //makeStyles,
} from '@mui/material';

import Logo_Blue from '../../shared/LogoSign';
import Footer from '../../shared/Footer';

const entitieOptions = [
  {
    id: 'aglcm',
    name: 'AGL CM'
  },
  {
    id: 'agltchad',
    name: 'AGL TCHAD'
  },
];
const sectionOptions = [
  {
    id: 'disl',
    name: 'DISL'
  },
  {
    id: 'agltchad',
    name: 'AGL TCHAD'
  },
];
/* const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
  let value = null;

  if (e.target.value !== 'all') {
    value = e.target.value;
  } */
const LoginForm = () => {
  const theme=useTheme();
  const [entitie, setEntitie] = React.useState();
  const handleEntitieChange = (e: ChangeEvent<HTMLInputElement>):void => {
    let value = null
    if(e.target.value !=='aglcm')
    {
      value = e.target.value ;
    }
    setEntitie(value);
  }
  const [section, setSection] = React.useState();
  const handleSectionChange= (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null
    if(e.target.value !=='aglcm')
    {
      value = e.target.value ;
    }
    setSection(value);
  }
  //const classes = useStyles();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here

    // Redirect to a different page after successful login
    router.push('/dashboards/home');
  };

  return (
    <>
      <Container 
      component="main"
      maxWidth="lg"
      style={{
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Logo_Blue/>
        <div style={{marginBottom:'20px'}}></div>
      <CssBaseline />
      <Paper 
        elevation={3} 
        style=
        {{
          padding: theme.spacing(4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h2">
          Connexion
        </Typography>
        <form 
          style=
          {{
            width: '100%',
            marginTop: theme.spacing(1),
          }} 
          onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <InputLabel id='demo-simple-select-label'>Entite</InputLabel>
          <Select 
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={entitie || 'aglcm'}
            label="Entite"
            onChange = {handleEntitieChange}
            fullWidth
          >
            {entitieOptions.map((entitieOption) => (
              <MenuItem key={entitieOption.id} value={entitieOption.id}>
                {entitieOption.name}
              </MenuItem>
            ))}
              
          </Select>
          <InputLabel id='demo-simple-select-label1'>Section</InputLabel>
          <Select 
            labelId='demo-simple-select-label1'
            id='demo-simple-select1'
            value={section || 'disl'}
            label="Section"
            onChange = {handleSectionChange}
            fullWidth
          >
            {sectionOptions.map((sectionOption) => (
              <MenuItem key={sectionOption.id} value={sectionOption.id}>
                {sectionOption.name}
              </MenuItem>
            ))}
          </Select>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            style=
            {{
              margin: theme.spacing(3, 0, 2),
            }}
          >
            Se connecter
          </Button>
        </form>
      </Paper>
    </Container>
    <Footer/>
    </>
  );
};

export default LoginForm;
