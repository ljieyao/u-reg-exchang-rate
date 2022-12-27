import {
  Autocomplete,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { CurrencyCode, currencyName } from "./constants";

type Props = {
  data: { currencyCode: string; rate: number }[];
  onDateChanged: (value: Dayjs | null) => void;
  onSourceChanged: (value: { label: string; code: CurrencyCode }) => void;
  dateValue: Dayjs;
  sourceValue: { label: string; code: CurrencyCode };
};

const LandingTemplate = ({
  data,
  onDateChanged,
  dateValue,
  onSourceChanged,
  sourceValue,
}: Props): React.ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>("");

  const currencyNameList = Object.entries(currencyName).map(
    ([currencyCode, name]) => ({
      label: `${currencyCode} - ${name}`,
      code: currencyCode,
    })
  );

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Grid item xs={12} mb={4}>
          <Typography variant="h5" align="center" sx={{ fontWeight: "bold" }}>
            Exchange Rate for <u>{sourceValue.label}</u> as of&nbsp;
            <u>{dateValue.format("YYYY-MM-DD")}</u>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} p={1}></Grid>
        <Grid item xs={12} md={3} p={1}>
          <Typography variant="body1">Select your base currency: </Typography>
          <Autocomplete
            disablePortal
            value={sourceValue}
            options={currencyNameList}
            onChange={(_, value) => value && onSourceChanged(value)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} md={3} p={1}>
          <Typography variant="body1">Filter the currency: </Typography>
          <Autocomplete
            disablePortal
            options={currencyNameList}
            onChange={(_, value) => setSearchTerm(value?.code)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item xs={12} md={3} p={1}>
          <Typography variant="body1">Select the date: </Typography>
          <DatePicker
            disableFuture
            closeOnSelect
            inputFormat="YYYY-MM-DD"
            value={dateValue.format("YYYY-MM-DD")}
            onChange={onDateChanged}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
      </Grid>
      {data
        .filter((exchangeItem) => {
          if (!searchTerm) {
            return exchangeItem;
          }
          return exchangeItem.currencyCode.includes(searchTerm);
        })
        .map((exchangeItem) => (
          <Grid item xs={12} sm={6} md={3} xl={2}>
            <Card>
              <CardContent>
                <Typography variant="h5" align="left">
                  {exchangeItem.currencyCode}
                </Typography>
                <Typography
                  variant="h4"
                  align="right"
                  sx={{ fontWeight: "bold" }}
                >
                  {exchangeItem.rate}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export type { Props };
export default LandingTemplate;
