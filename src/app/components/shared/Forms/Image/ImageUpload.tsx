import { useState } from 'react';
import { Box, Button, Link } from '@mui/material';

export default function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box
      sx={{
        width: '300px',
        height: '200px',
        border: '1px dashed white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '20px',
      }}
    >
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        type="file"
        onChange={handleImageUpload}
      />
      <label htmlFor="contained-button-file">
          Glisser & déposer vos fichiers ou parcourir

      </label>
      {image && <img src={image} alt="Prévisualisation de l'image" />}
    </Box>
  );
}