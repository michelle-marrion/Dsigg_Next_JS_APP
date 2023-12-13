import { Link, Typography, } from '@mui/material';

import 'src/styles/globals.css' ;

const Footer = (props) =>{
  return (
    <>
          <div style={{padding :35}}></div>
          <footer className='footer mt-3'>
            <Typography variant="subtitle1" color="text.secondary" align="center" className='m-0 py-3' {...props}>
            &copy;   {new Date().getFullYear()}
                {'.'} - Template NextJS APP {' / '}
                Edited by {' '}
                <Link color="inherit" href="https://aglgroup.com" target="_blank">
                    AFRICA GLOBAL LOGISTICS
                </Link>{' '}
              
            </Typography>
        </footer>
      </>
  );
}

export default Footer;
