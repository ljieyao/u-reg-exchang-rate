import { Box, Grid, Typography } from "@mui/material";

const DefaultLayout: React.FunctionComponent = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box my={2}>
          <Typography variant="h3" align="center">
            U-Reg Currency Exchange Rate
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box p={3}>{children}</Box>
      </Grid>

      <Grid item xs={12}>
        <Box textAlign="center" p={2}>
          <Typography>U-Reg ©{new Date().getFullYear()}.</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
