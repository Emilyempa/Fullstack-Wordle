import { Box } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{
            textAlign: 'center',
            padding: '1rem 0',
            backgroundColor: '#cdb4db',
            boxShadow:  '0px -4px 6px rgba(0, 0, 0, 0.1)', 
            position: 'absolute',
            bottom: 0,
            width: '100%',
        }}>
        <p>&copy; {new Date().getFullYear()} Emily's Wordle App</p>
      </Box>
    );
  }
  
  export default Footer;