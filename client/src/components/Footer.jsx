import { Box, Typography } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{
            textAlign: 'center',
            padding: { xs: '0.5rem 0', md: '1rem 0' }, 
            backgroundColor: '#cdb4db',
            boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            minHeight: 'fit-content', 
            boxSizing: 'border-box', 
        }}>
            <Typography 
                variant="body2" 
                sx={{ 
                    margin: 0,
                    lineHeight: 1.2,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                }}
            >
                &copy; {new Date().getFullYear()} Emily's Wordle App
            </Typography>
        </Box>
    );
}

export default Footer;