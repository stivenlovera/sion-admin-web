import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Backdrop, CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { storeToken } from '../src/Reducers/index';
import { SnackbarProvider } from 'notistack';
import ReportComplete from './components/stack-alert/stack-success';
import { esES } from '@mui/x-date-pickers/locales';
import { esES as coreesES } from '@mui/material/locale';
import 'dayjs/locale/es';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

declare module "notistack" {
  interface VariantOverrides {
    successAlert: true;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#2e3696'
      }
    },
    typography: {
      fontSize: 14,
      allVariants: {
        fontSize: 14,
      },
      button: {
        textTransform: "none"
      },
    },

    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: 10,
          }
        },
      },
      /*  MuiOutlinedInput: {
         styleOverrides: {
           root: {
             fontSize: 12,
           }
         }
       } */
    }
  },
  esES,
  coreesES,
);



root.render(
  /*   <React.StrictMode> */
  <Provider store={storeToken}>

    <SnackbarProvider
      Components={{
        successAlert: ReportComplete
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <LocalizationProvider
            adapterLocale='es'
            dateAdapter={AdapterDayjs}
          >
            <Suspense fallback={
              <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
                <CircularProgress color="inherit" />
              </Backdrop>
            }>
              <App />
            </Suspense>

          </LocalizationProvider>
        </ThemeProvider>
      </BrowserRouter>
    </SnackbarProvider>
  </Provider >
  /*   </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
