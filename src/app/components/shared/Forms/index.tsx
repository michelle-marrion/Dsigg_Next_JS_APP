import { Button, TextField, Box, Typography, Grid } from '@mui/material';
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css' ;
import Text from '@/app/components/shared/Text'
import {EditorState} from 'draft-js';
import TextEditor from './TextEditor';
export default function AuthorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [editorState] = useState(()=>
      EditorState.createEmpty(),
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const contentState = editorState.getCurrentContent();
    console.log('contentState', contentState);
    // Traitez les données du formulaire ici
  };

  return (
      <>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography variant="h6">Créer un auteur</Typography>
      <Grid container spacing={2}>
            <Grid item xs={6}>
                  <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nom"
                        name="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                  />
            </Grid>
            <Grid item xs={6}>
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Adresse e-mail"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
            />
            </Grid>
      </Grid>

      
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="bio"
        label="Bio"
        name="bio"
        multiline
        rows={4}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <Text>Bio</Text>
      <TextEditor/>
      <Grid container spacing={2}>
            <Grid item xs={6}>
                  <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="github"
                        label="GitHub"
                        name="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                  />
            </Grid>
            <Grid item xs={6}>
                  <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="twitter"
                        label="Twitter"
                        name="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                  />
            </Grid>
      </Grid>

      <Grid container spacing={1}>
            <Grid item xs={2}>
                  <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{backgroundColor:'#1b365f'}}
                  >
                  create
                  </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 3, mb: 2 }}
                        style={{backgroundColor:''}}
                  >
                  create and create another
                  </Button>
            </Grid>
            <Grid item xs={2}>
            <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="error"
                        background-color='error'
                        style= {{backgroundColor:'red'}}
                  >
                  cancel
                  </Button>
            </Grid>
      </Grid>
      
    </Box>
    </>
  );
}
