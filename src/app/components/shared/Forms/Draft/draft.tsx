import { Button, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css' ;
import dynamic from 'next/dynamic';
import Text from '@/app/components/shared/Text'
import {Editor, EditorState} from 'draft-js';
const QuilNoSSRWrapper = dynamic (import('react-quill'),
{
      ssr:  false,
      loading :() =><p>Loading ....</p>
});
const modules =
{
      toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
            ],
            ['link', 'image', 'video'],
            ['clean'],
          ],
          clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
          },
};
const formats = [
      'header',
      'font',
      'size',
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      'list',
      'bullet',
      'indent',
      'link',
      'image',
      'video',
    ]
export default function AuthorForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [value, setValue] = useState('');
  const [editorState, setEditorState] = useState(()=>
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
      <QuilNoSSRWrapper 
            value={bio}
            //onChange={(e) => setBio(e.target.value)}
            modules={modules} 
            formats={formats} theme='snow'/>
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Créer
      </Button>
    </Box>
    <Box>
    <form onSubmit={handleSubmit}>
    <ReactQuill value={value} onChange={setValue}/>
    <Button>Send</Button>
    
    </form>
  
    </Box>
    <Box>
    <form onSubmit={handleSubmit}>
      <Editor editorState={editorState} onChange={setEditorState}/>
      <Button>Edit</Button>
      <QuilNoSSRWrapper modules={modules} formats={formats} theme='snow'/>
    </form>
    </Box>
    </>
  );
}
