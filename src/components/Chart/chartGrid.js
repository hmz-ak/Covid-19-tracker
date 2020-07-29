import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Chart } from "./Chart";
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

export function ChartGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <Chart />
        </Grid>
        <Grid item sm={12} md={6}>
          <PolarChart />
        </Grid>
      </Grid>
    </div>
  );
}
