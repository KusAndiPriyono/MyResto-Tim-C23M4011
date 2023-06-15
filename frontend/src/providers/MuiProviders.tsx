import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export default function MuiProviders({ children }: Props) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div> {children}</div>
    </ThemeProvider>
  );
}
