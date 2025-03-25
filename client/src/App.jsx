import Header from '/src/components/Header.jsx';
import Footer from '/src/components/Footer.jsx';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from '/src/pages/Play.jsx';
import About from '/src/pages/About.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Play />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App
