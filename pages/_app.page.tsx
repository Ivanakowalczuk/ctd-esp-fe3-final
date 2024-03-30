import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from "@mui/material";
import LayoutGeneral from "dh-marvel/components/layouts/layout-general";
import { theme } from "dh-marvel/styles/material-theme";
import ContextProvider from 'context/index.context';
import { useRouter } from 'next/router';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  // Define una función para determinar qué diseño aplicar según la ruta actual
  const getLayout = () => {
    if (currentPath.match(/^\/checkout\/\d+$/)) {
      return <LayoutCheckout><Component {...pageProps} /></LayoutCheckout>;
    } else {
      return <LayoutGeneral><Component {...pageProps} /></LayoutGeneral>;
    }
  };

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {router?.asPath.match(/^\/checkout\/\d+$/) || router?.asPath.match(/^\/confirmada\/\d+$/) ?
         <LayoutCheckout><Component {...pageProps} /></LayoutCheckout>
          :   <LayoutGeneral><Component {...pageProps} /></LayoutGeneral>
   
             }
      </ThemeProvider>
    </ContextProvider>
  );
}

export default MyApp;
