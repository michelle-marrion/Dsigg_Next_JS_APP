import { useState } from 'react';
import { Box, Tooltip} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
export default function ImageUpload() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        setImages([...images, ...newImages]);
      };

      reader.readAsDataURL(files[i]);
    }
  };

  return (
      <Tooltip title="Upload files" >
                <Box
      sx={{
        width: 'auto',
        height: '100px',
        border: '1px dashed white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#0f1f1f',
        borderRadius: '10px',
        overflowY:'auto' //Ajouter une barre de défilement verticale
      }}
    >
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        type="file"
        multiple
        onChange={handleImageUpload}
      />
      
      <label htmlFor="contained-button-file"
            style={{
                  padding:'10px'
            }}
      >
        <UploadIcon/> Upload File
      </label>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Prévisualisation de l'image ${index + 1}`} />
      ))}
    </Box>
      </Tooltip>
  );
}