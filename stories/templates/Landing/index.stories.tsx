import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Meta, Story } from "@storybook/react";
import dayjs from "dayjs";

import LandingTemplate, { Props } from ".";
import { currencyCode, currencyName } from "./constants";

const meta: Meta<Props> = {
  title: "Templates/Landing",
  component: LandingTemplate,
};

const Template: Story<Props> = (props) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <LandingTemplate {...props} />
  </LocalizationProvider>
);

const data = [
  {
    currencyCode: "AED",
    rate: 3.672415,
  },
  {
    currencyCode: "AFN",
    rate: 88.47132,
  },
  {
    currencyCode: "ALL",
    rate: 107.34027,
  },
  {
    currencyCode: "AMD",
    rate: 394.490545,
  },
  {
    currencyCode: "ANG",
    rate: 1.801309,
  },
  {
    currencyCode: "AOA",
    rate: 503.869898,
  },
  {
    currencyCode: "ARS",
    rate: 174.314185,
  },
  {
    currencyCode: "AUD",
    rate: 1.488317,
  },
  {
    currencyCode: "AWG",
    rate: 1.8025,
  },
  {
    currencyCode: "AZN",
    rate: 1.664817,
  },
  {
    currencyCode: "BAM",
    rate: 1.842168,
  },
  {
    currencyCode: "BBD",
    rate: 2.017986,
  },
  {
    currencyCode: "BDT",
    rate: 105.817651,
  },
  {
    currencyCode: "BGN",
    rate: 1.842691,
  },
  {
    currencyCode: "BHD",
    rate: 0.376848,
  },
  {
    currencyCode: "BIF",
    rate: 2071.752849,
  },
  {
    currencyCode: "BMD",
    rate: 1,
  },
  {
    currencyCode: "BND",
    rate: 1.350099,
  },
  {
    currencyCode: "BOB",
    rate: 6.907884,
  },
  {
    currencyCode: "BRL",
    rate: 5.191502,
  },
  {
    currencyCode: "BSD",
    rate: 0.999482,
  },
  {
    currencyCode: "BTC",
    rate: 0.000059427861,
  },
  {
    currencyCode: "BTN",
    rate: 82.796553,
  },
  {
    currencyCode: "BWP",
    rate: 12.813598,
  },
  {
    currencyCode: "BYN",
    rate: 2.522718,
  },
  {
    currencyCode: "BYR",
    rate: 19600,
  },
  {
    currencyCode: "BZD",
    rate: 2.014596,
  },
  {
    currencyCode: "CAD",
    rate: 1.35992,
  },
  {
    currencyCode: "CDF",
    rate: 2034.999909,
  },
  {
    currencyCode: "CHF",
    rate: 0.931999,
  },
  {
    currencyCode: "CLF",
    rate: 0.031845,
  },
  {
    currencyCode: "CLP",
    rate: 878.650403,
  },
  {
    currencyCode: "CNY",
    rate: 6.962699,
  },
  {
    currencyCode: "COP",
    rate: 4759,
  },
  {
    currencyCode: "CRC",
    rate: 581.849863,
  },
  {
    currencyCode: "CUC",
    rate: 1,
  },
  {
    currencyCode: "CUP",
    rate: 26.5,
  },
  {
    currencyCode: "CVE",
    rate: 103.857022,
  },
  {
    currencyCode: "CZK",
    rate: 22.780598,
  },
  {
    currencyCode: "DJF",
    rate: 177.927398,
  },
  {
    currencyCode: "DKK",
    rate: 6.999799,
  },
  {
    currencyCode: "DOP",
    rate: 55.937647,
  },
  {
    currencyCode: "DZD",
    rate: 137.521899,
  },
  {
    currencyCode: "EGP",
    rate: 24.730402,
  },
  {
    currencyCode: "ERN",
    rate: 15,
  },
  {
    currencyCode: "ETB",
    rate: 53.545823,
  },
  {
    currencyCode: "EUR",
    rate: 0.94095,
  },
  {
    currencyCode: "FJD",
    rate: 2.235203,
  },
  {
    currencyCode: "FKP",
    rate: 0.829623,
  },
  {
    currencyCode: "GBP",
    rate: 0.828157,
  },
  {
    currencyCode: "GEL",
    rate: 2.675005,
  },
  {
    currencyCode: "GGP",
    rate: 0.829623,
  },
  {
    currencyCode: "GHS",
    rate: 9.996986,
  },
  {
    currencyCode: "GIP",
    rate: 0.829623,
  },
  {
    currencyCode: "GMD",
    rate: 61.949829,
  },
  {
    currencyCode: "GNF",
    rate: 8617.406047,
  },
  {
    currencyCode: "GTQ",
    rate: 7.855609,
  },
  {
    currencyCode: "GYD",
    rate: 209.155129,
  },
  {
    currencyCode: "HKD",
    rate: 7.80725,
  },
  {
    currencyCode: "HNL",
    rate: 24.669869,
  },
  {
    currencyCode: "HRK",
    rate: 7.100201,
  },
  {
    currencyCode: "HTG",
    rate: 146.954884,
  },
  {
    currencyCode: "HUF",
    rate: 376.610345,
  },
  {
    currencyCode: "IDR",
    rate: 15619.5,
  },
  {
    currencyCode: "ILS",
    rate: 3.49775,
  },
  {
    currencyCode: "IMP",
    rate: 0.829623,
  },
  {
    currencyCode: "INR",
    rate: 82.73145,
  },
  {
    currencyCode: "IQD",
    rate: 1459.075068,
  },
  {
    currencyCode: "IRR",
    rate: 41699.999799,
  },
  {
    currencyCode: "ISK",
    rate: 143.330025,
  },
  {
    currencyCode: "JEP",
    rate: 0.829623,
  },
  {
    currencyCode: "JMD",
    rate: 152.332031,
  },
  {
    currencyCode: "JOD",
    rate: 0.7093,
  },
  {
    currencyCode: "JPY",
    rate: 132.946957,
  },
  {
    currencyCode: "KES",
    rate: 123.209425,
  },
  {
    currencyCode: "KGS",
    rate: 85.680376,
  },
  {
    currencyCode: "KHR",
    rate: 4112.743713,
  },
  {
    currencyCode: "KMF",
    rate: 464.050279,
  },
  {
    currencyCode: "KPW",
    rate: 900,
  },
  {
    currencyCode: "KRW",
    rate: 1275.559876,
  },
  {
    currencyCode: "KWD",
    rate: 0.30646,
  },
  {
    currencyCode: "KYD",
    rate: 0.832902,
  },
  {
    currencyCode: "KZT",
    rate: 461.509487,
  },
  {
    currencyCode: "LAK",
    rate: 17312.114506,
  },
  {
    currencyCode: "LBP",
    rate: 1511.182259,
  },
  {
    currencyCode: "LKR",
    rate: 365.302227,
  },
  {
    currencyCode: "LRD",
    rate: 154.450086,
  },
  {
    currencyCode: "LSL",
    rate: 16.990023,
  },
  {
    currencyCode: "LTL",
    rate: 2.95274,
  },
  {
    currencyCode: "LVL",
    rate: 0.60489,
  },
  {
    currencyCode: "LYD",
    rate: 4.816046,
  },
  {
    currencyCode: "MAD",
    rate: 10.498823,
  },
  {
    currencyCode: "MDL",
    rate: 19.234616,
  },
  {
    currencyCode: "MGA",
    rate: 4440.09605,
  },
  {
    currencyCode: "MKD",
    rate: 58.034285,
  },
  {
    currencyCode: "MMK",
    rate: 2098.863129,
  },
  {
    currencyCode: "MNT",
    rate: 3445.996405,
  },
  {
    currencyCode: "MOP",
    rate: 8.032872,
  },
  {
    currencyCode: "MRO",
    rate: 356.999828,
  },
  {
    currencyCode: "MUR",
    rate: 43.649952,
  },
  {
    currencyCode: "MVR",
    rate: 15.39532,
  },
  {
    currencyCode: "MWK",
    rate: 1025.87975,
  },
  {
    currencyCode: "MXN",
    rate: 19.3657,
  },
  {
    currencyCode: "MYR",
    rate: 4.42495,
  },
  {
    currencyCode: "MZN",
    rate: 63.829977,
  },
  {
    currencyCode: "NAD",
    rate: 16.990281,
  },
  {
    currencyCode: "NGN",
    rate: 446.630584,
  },
  {
    currencyCode: "NIO",
    rate: 36.499011,
  },
  {
    currencyCode: "NOK",
    rate: 9.864399,
  },
  {
    currencyCode: "NPR",
    rate: 132.474334,
  },
  {
    currencyCode: "NZD",
    rate: 1.59109,
  },
  {
    currencyCode: "OMR",
    rate: 0.384849,
  },
  {
    currencyCode: "PAB",
    rate: 0.999717,
  },
  {
    currencyCode: "PEN",
    rate: 3.804841,
  },
  {
    currencyCode: "PGK",
    rate: 3.523217,
  },
  {
    currencyCode: "PHP",
    rate: 55.079975,
  },
  {
    currencyCode: "PKR",
    rate: 226.25246,
  },
  {
    currencyCode: "PLN",
    rate: 4.36695,
  },
  {
    currencyCode: "PYG",
    rate: 7304.204529,
  },
  {
    currencyCode: "QAR",
    rate: 3.640983,
  },
  {
    currencyCode: "RON",
    rate: 4.6339,
  },
  {
    currencyCode: "RSD",
    rate: 110.519921,
  },
  {
    currencyCode: "RUB",
    rate: 68.365022,
  },
  {
    currencyCode: "RWF",
    rate: 1065.756392,
  },
  {
    currencyCode: "SAR",
    rate: 3.760297,
  },
  {
    currencyCode: "SBD",
    rate: 8.237372,
  },
  {
    currencyCode: "SCR",
    rate: 14.262974,
  },
  {
    currencyCode: "SDG",
    rate: 572.493911,
  },
  {
    currencyCode: "SEK",
    rate: 10.51172,
  },
  {
    currencyCode: "SGD",
    rate: 1.347595,
  },
  {
    currencyCode: "SHP",
    rate: 1.377398,
  },
  {
    currencyCode: "SLE",
    rate: 18.865046,
  },
  {
    currencyCode: "SLL",
    rate: 18844.999741,
  },
  {
    currencyCode: "SOS",
    rate: 568.4841,
  },
  {
    currencyCode: "SRD",
    rate: 31.639044,
  },
  {
    currencyCode: "STD",
    rate: 20697.981008,
  },
  {
    currencyCode: "SVC",
    rate: 8.745233,
  },
  {
    currencyCode: "SYP",
    rate: 2512.537296,
  },
  {
    currencyCode: "SZL",
    rate: 17.075757,
  },
  {
    currencyCode: "THB",
    rate: 34.769668,
  },
  {
    currencyCode: "TJS",
    rate: 10.201846,
  },
  {
    currencyCode: "TMT",
    rate: 3.51,
  },
  {
    currencyCode: "TND",
    rate: 3.135497,
  },
  {
    currencyCode: "TOP",
    rate: 2.36055,
  },
  {
    currencyCode: "TRY",
    rate: 18.66993,
  },
  {
    currencyCode: "TTD",
    rate: 6.783935,
  },
  {
    currencyCode: "TWD",
    rate: 30.7355,
  },
  {
    currencyCode: "TZS",
    rate: 2331.999855,
  },
  {
    currencyCode: "UAH",
    rate: 36.913226,
  },
  {
    currencyCode: "UGX",
    rate: 3638.88104,
  },
  {
    currencyCode: "UYU",
    rate: 38.343223,
  },
  {
    currencyCode: "UZS",
    rate: 11202.684374,
  },
  {
    currencyCode: "VEF",
    rate: 1641645.049992,
  },
  {
    currencyCode: "VES",
    rate: 16.432022,
  },
  {
    currencyCode: "VND",
    rate: 23605,
  },
  {
    currencyCode: "VUV",
    rate: 118.428371,
  },
  {
    currencyCode: "WST",
    rate: 2.718888,
  },
  {
    currencyCode: "XAF",
    rate: 617.69104,
  },
  {
    currencyCode: "XAG",
    rate: 0.042113,
  },
  {
    currencyCode: "XAU",
    rate: 0.000556,
  },
  {
    currencyCode: "XCD",
    rate: 2.70255,
  },
  {
    currencyCode: "XDR",
    rate: 0.750694,
  },
  {
    currencyCode: "XOF",
    rate: 617.69104,
  },
  {
    currencyCode: "XPF",
    rate: 112.849982,
  },
  {
    currencyCode: "YER",
    rate: 250.362923,
  },
  {
    currencyCode: "ZAR",
    rate: 17.008898,
  },
  {
    currencyCode: "ZMK",
    rate: 9001.199356,
  },
  {
    currencyCode: "ZMW",
    rate: 17.900278,
  },
  {
    currencyCode: "ZWL",
    rate: 321.999592,
  },
];

const Default = Template.bind({});
Default.args = {
  data,
  dateValue: dayjs(),
  onDateChanged: () => {},
  onSourceChanged: () => {},
  sourceValue: {
    label: `${currencyCode.SGD} - ${currencyName.SGD}`,
    code: currencyCode.SGD,
  },
};

export { Default };
export default meta;
