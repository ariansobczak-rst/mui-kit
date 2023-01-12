import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { darkTheme, theme } from '../../src/theme';

const THEMES = {
  light: theme,
  dark: darkTheme
};

export const withMuiTheme = (Story, ctx) => {
  const { theme: themeKey } = ctx.globals;

  const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};
