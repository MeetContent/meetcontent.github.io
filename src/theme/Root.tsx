import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Root({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: ['bariolregular'].join(','),
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
