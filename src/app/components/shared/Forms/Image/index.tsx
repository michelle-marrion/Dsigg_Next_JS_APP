import { useState } from 'react';
import { Box, Button } from '@mui/material';    
export default function ImageUpload() 
{
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
        <Box>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="contained-button-file"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              Charger une image
            </Button>
          </label>
          {image && <img src={image} alt="Prévisualisation de l'image" />}
        </Box>
      );
}
        