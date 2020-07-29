import React, { useState, useEffect } from "react";
import { fetchData } from "../../api";
import { Polar } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
export const BarChart = ({ data, country }) => {
  var virus = [];
  Object.keys(country).map((key, index) => {
    virus[index] = country[key];
  });
  return (
    <Bar
      data={{
        labels: [
          "Total Cases",
          "Total Recovered",
          "Total Active Cases",
          "Total Deaths",
          "Total New Cases",
          "Total New Deaths",
          "Total Serious Cases",
        ],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "#799cff",
              "#ec8b37",
              "#4dbb6f",
              "#cc4646",
              "#767522",
              "#941225",
              "093A3E",
            ],
            data: [
              virus[0], //total
              virus[2], //recovered
              virus[1], //total active cases
              virus[3], //total Deaths
              virus[4], //total new Cases
              virus[5], //total new deaths
              virus[6], //total serious cases
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true },
      }}
    />
  );
};
