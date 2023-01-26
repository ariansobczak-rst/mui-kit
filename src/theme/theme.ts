import { createTheme, touchRippleClasses } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { CSSProperties } from '@mui/styled-engine';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400]
    },
    red: '#ff0',
    background: {
      default: grey[100]
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true
      },
      styleOverrides: {
        root: {
          '&&': {
            backgroundColor: '#0f0'
          },
          [`.${touchRippleClasses.root}`]: {
            // backgroundColor: '#f00'
          }
        }
      }
      //   styleOverrides: {
      //     contained: {
      //       boxShadow: 'none'
      //     }
      //   }
      //   styleOverrides: {
      //     root: {
      //       backgroundColor: '#f00',
      //       borderRadius: 100,
      //       paddingLeft: 20,
      //       paddingRight: 20,
      //       color: 'black'
      //     },

      //   }
    }
  }
});

declare module '@mui/material/styles' {
  interface Palette {
    red?: CSSProperties['color'];
  }

  interface PaletteOptions {
    red?: CSSProperties['color'];
  }
}

export default theme;
