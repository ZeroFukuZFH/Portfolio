import Home from "./Pages/Home/Main"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
      light: '#4B4E53',
      dark: '#1D1E27',
      contrastText:'#EDF2F4'
    }
  }
})

function App() {
  
  return (
    <ThemeProvider theme={mainTheme}>
      <Home/>
    </ThemeProvider>
  );
}


export default App
