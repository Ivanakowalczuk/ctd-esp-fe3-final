import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import {theme} from "dh-marvel/styles/material-theme";
import ContextProvider from 'context/index.context';

function MyApp({ Component, pageProps }: AppProps) {
  return  (<ContextProvider>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <LayoutGeneral>
      <Component {...pageProps} />
    </LayoutGeneral>
  </ThemeProvider>
  </ContextProvider>)
}

export default MyApp
