import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey['800'],
      paper: blueGrey['700']
    }
  }
});

export default theme;
