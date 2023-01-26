import { ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Typography variant="h1" color="initial">
      Hello world!
    </Typography>
  </ThemeProvider>
);

export default App;
