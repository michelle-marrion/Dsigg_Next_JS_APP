import { useState } from 'react';
import { Box, Button } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
        <Box>
      <input
        style={{ display: 'none' }}
        id="contained-button-file"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="contained-button-file"
        style={{padding:'20px'}}
      >
        <Button variant="contained" component="span" startIcon={<UploadIcon/>}>
          Télécharger un fichier
        </Button>
      </label>
      
    </Box>
    <Box>
      {file && <object data={file} type="application/pdf" width="100%" height="600px" />}
    </Box>
    </>
  );
}
