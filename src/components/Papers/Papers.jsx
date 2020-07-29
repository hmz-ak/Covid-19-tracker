import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CountUp from "react-countup";
import { ButtonAppBar } from "../AppBar/AppBar";

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

export const Papers = ({ data }) => {
  var virus = [];

  const classes = useStyles();

  if (!data) {
    return "Loading...";
  }
  {
    Object.keys(data).map((key, index) => {
      virus[index] = data[key];
    });
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid black" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "black" }}
                >
                  <CountUp
                    start={0}
                    end={virus[0]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "black" }}
                >
                  Total Cases
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid green" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  <CountUp
                    start={0}
                    end={virus[2]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  Total Recovered
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid teal" }}
              >
                <Typography variant="h4" gutterBottom style={{ color: "teal" }}>
                  <CountUp
                    start={0}
                    end={virus[1]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "teal" }}
                >
                  Total Active Cases
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid red" }}
              >
                <Typography variant="h4" gutterBottom style={{ color: "red" }}>
                  <CountUp
                    start={0}
                    end={virus[3]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "red" }}
                >
                  Total Deaths
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid navy" }}
              >
                <Typography variant="h4" gutterBottom style={{ color: "navy" }}>
                  <CountUp
                    start={0}
                    end={virus[4]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "navy" }}
                >
                  Total New Cases Today
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid #941225" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "#941225" }}
                >
                  <CountUp
                    start={0}
                    end={virus[5]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "#941225" }}
                >
                  Total New Deaths Today
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid purple" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "purple" }}
                >
                  <CountUp
                    start={0}
                    end={virus[6]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "purple" }}
                >
                  Total Serious Cases
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Paper
                className={classes.paper}
                style={{ borderBottom: "4px solid #767522" }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "#767522" }}
                >
                  <CountUp
                    start={0}
                    end={virus[7]}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "#767522" }}
                >
                  Total Affected Countries
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};
