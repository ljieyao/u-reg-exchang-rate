import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NoSsr, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { NextPage } from "next";
import Head from "next/head";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AppConfigProvider from "../stories/particles/AppConfigProvider";

const URegCurrencyRateApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <NoSsr>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppConfigProvider>
          <ThemeProvider theme={theme}>
            <Head>
              <title>U-Reg Currency Converter</title>
            </Head>
            <Component {...pageProps} />
          </ThemeProvider>
        </AppConfigProvider>
      </LocalizationProvider>
    </NoSsr>
  );
};

export default URegCurrencyRateApp;
