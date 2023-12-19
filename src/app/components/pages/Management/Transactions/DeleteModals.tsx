import PropTypes from 'prop-types';
import { useState } from 'react';

import {
      IconButton, Tooltip, Grid
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import  DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';

function SimpleDialog(props) {
      const theme = useTheme();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog 
      onClose={handleClose}
      open={open}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
     
    >
      <Grid style={{padding:'30px',}}>
            <Grid container justifyContent="center">
                  <IconButton
                        sx={{
                        '&:hover': {background : theme.colors.error.lighter},
                        color : theme.palette.error.main
                        }}
                        color='inherit'
                        size = "small"
                        style={{alignItems:'center'}}
                  >
                        <DeleteIcon fontSize = "large"/>
                  </IconButton>
            </Grid>
            
                  <Typography
                        variant="h4"
                        fontWeight="bold"
                        color="text.primary"
                        align='center'
                        gutterBottom
                        noWrap id="alert-dialog-title"
                        style={{paddingTop:'10px'}}
                  >
                        {"Delete Name of Object "}
                  </Typography>
            
                  <Typography  
                        variant="body2"
                        color="text.secondary" noWrap
                        align='center'
                        id="alert-dialog-description"
                        >
                        Are you sure you would like to do this?
                  </Typography>                             
            
            <Grid container justifyContent="center" style={{padding:'5px'}}>
                  <Button 
                  variant="outlined"
                  size="large"
                  onClick={handleClose} sx={{ margin: 1 }}
                  >
                              Cancel
                  </Button>
                  
                  <Button 
                  sx={{ margin: 1 }}
                  onClick={handleClose} 
                  size="large"
                  color="primary" autoFocus 
                        style={{background : theme.colors.error.main,
                        color: 'white'}}
                  >
                        Confirm
                  </Button>
            </Grid>
         
          
      </Grid>
      
  
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

function DeleteModals() {
      const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Tooltip title="Delete Order" arrow>
        <>
        <IconButton
            sx={{
            '&:hover': {background : theme.colors.error.lighter},
            color : theme.palette.error.main
            }}
            color='inherit'
            size = "small"
            onClick={handleClickOpen}
          >
            <DeleteTwoToneIcon fontSize = "small"/>
          </IconButton>
            <SimpleDialog
              open={open}
              onClose={handleClose}
            />           
        </>
      </Tooltip>  
    </>
  );
}

export default DeleteModals;
