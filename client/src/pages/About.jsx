import { Container, Typography, Stack, Divider, Box } from '@mui/material';

function About() {
    return (
      <Container maxWidth="md" sx={{ paddingY: 8 }}>
        <Box
          sx={{
            padding: 6,
            borderRadius: '16px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <Stack spacing={4}>
            <Typography 
              variant="h3" 
              component="h1"
              sx={{
                fontWeight: 700,
                color: '#cdb4db', 
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: 1.2,
                fontSize: {
                  xs: '2rem',
                  md: '3rem'
                }
              }}
            >
              About This App
            </Typography>
  
            <Divider sx={{ 
              width: '60%', 
              marginX: 'auto', 
              marginBottom: 2, 
              borderColor: '#ddd' 
            }} />
  
            <Typography 
              variant="body1" 
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#003049',
                textAlign: 'center'
              }}
            >
              This is a wordle-like game built for a school project, by me, Emily.
            </Typography>
  
            <Typography 
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#003049',
                textAlign: 'center',
                fontStyle: 'italic'
              }}
            >
              The app is built with React, Vite, Node.js, Express.js, and Material UI.
            </Typography>
  
            <Typography 
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 500,
                color: '#003049', 
                textAlign: 'center',
                marginTop: 4,
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease'
                }
              }}
            >
              Thanks for checking it out! 🎉
            </Typography>
          </Stack>
        </Box>
      </Container>
    );
  }

export default About;