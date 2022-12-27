import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import LandingTemplate, {
  Props as LandingTemplateProps,
} from "../../templates/Landing";
import {
  currencyCode,
  CurrencyCode,
  currencyName,
} from "../../templates/Landing/constants";
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import DefaultLayout from "../../organisms/layout/Default";
import dayjs, { Dayjs } from "dayjs";
import { useAppConfig } from "../../particles/AppConfigProvider";

type APILayerResponse = {
  quotes?: Record<string, number>;
  source?: CurrencyCode;
  success?: boolean;
  timestamp?: EpochTimeStamp;
  data?: string;
  historical?: boolean;
  message?: string;
};

const LandingPage: NextPage = () => {
  const [data, setData] = useState<APILayerResponse>();
  const [isLoading, setLoading] = useState(false);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const appConfig = useAppConfig();

  const apiLayerHeaders = new Headers();
  apiLayerHeaders.append("apikey", appConfig.API_LAYER_API_KEY);

  const requestOptions = {
    method: "GET",
    headers: apiLayerHeaders,
  };

  const defaultSourceValue = {
    label: `${currencyCode.SGD} - ${currencyName.SGD}`,
    code: currencyCode.SGD,
  };

  const [sourceValue, setSourceValue] =
    useState<{
      label: string;
      code: CurrencyCode;
    } | null>(defaultSourceValue);

  const fetchData = (date: Dayjs, source: CurrencyCode = currencyCode.SGD) => {
    if (!appConfig.API_LAYER_API_KEY) return;

    setLoading(true);

    const endpoint = date.isToday() ? "live" : "historical";

    fetch(
      `https://api.apilayer.com/currency_data/${endpoint}?source=${source}&date=${date.format(
        "YYYY-MM-DD"
      )}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data: APILayerResponse) => {
        if (data.message) {
          alert(data.message);

          return;
        }

        setData(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(dayjs());
  }, [appConfig]);

  if (!(data && data?.quotes && data?.source)) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100vh", width: "100vw" }}
      >
        <Typography variant="h3" align="center">
          Something wrong... <br /> Please try again later...
        </Typography>
      </Box>
    );
  }

  const { quotes, source } = data;

  const dataArr = Object.entries(quotes).map(([currencyCode, rate]) => ({
    currencyCode: currencyCode.replace(source, ""),
    rate,
  }));

  const handleDateChanged: LandingTemplateProps["onDateChanged"] = (value) => {
    setDateValue(value);
    value && fetchData(value);
  };

  const handleSourceChanged: LandingTemplateProps["onSourceChanged"] = (
    value
  ) => {
    setSourceValue(value);
    fetchData(dateValue || dayjs(), value.code);
  };

  return (
    <DefaultLayout>
      <Head>
        <title>U-Reg Currency Rate</title>
      </Head>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress />
      </Backdrop>

      <LandingTemplate
        dateValue={dateValue ?? dayjs()}
        data={dataArr}
        onDateChanged={handleDateChanged}
        onSourceChanged={handleSourceChanged}
        sourceValue={sourceValue ?? defaultSourceValue}
      />
    </DefaultLayout>
  );
};

export default LandingPage;
