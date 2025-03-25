import Header from '/src/components/Header.jsx';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
    </ThemeProvider>
  )
}

export default App
