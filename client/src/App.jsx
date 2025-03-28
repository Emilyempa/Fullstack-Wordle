import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from '/src/pages/Play.jsx';
import About from '/src/pages/About.jsx';
import NotFound from '/src/pages/NotFound.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 120px)", 
            padding: 2,
          }}
        >
        <Routes>
          <Route path="/" element={<Play />} /> 
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App
