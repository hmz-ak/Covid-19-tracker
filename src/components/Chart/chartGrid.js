import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Chart } from "./Chart";
import Container from "@material-ui/core/Container";
import { BarChart } from "./BarChart";

import { PolarChart } from "./PolarChart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function ChartGrid({ data, country }) {
  const classes = useStyles();
  console.log(data);
  console.log(country);

  if (country) {
    return (
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                <BarChart data={data} country={country} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <Paper className={classes.paper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item sm={12} md={6}>
              <Paper className={classes.paper}>
                <PolarChart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
