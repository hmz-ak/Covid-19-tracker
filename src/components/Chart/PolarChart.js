import React, { useState, useEffect } from "react";
import { fetchData } from "../../api";
import { Polar } from "react-chartjs-2";

export function PolarChart() {
  var virus = [];
  const [data_chart, setData] = useState({});

  useEffect(() => {
    const fetch_Data = async () => {
      setData(await fetchData());
    };
    fetch_Data();
  }, []);
  if (!data_chart) {
    return "Waiting for Chart";
  }

  Object.keys(data_chart).map((key, index) => {
    virus[index] = data_chart[key];
  });

  const data = {
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
        data: [
          virus[0], //total
          virus[2], //recovered
          virus[1], //total active cases
          virus[3], //total Deaths
          virus[4], //total new Cases
          virus[5], //total new deaths
          virus[6], //total serious cases
        ],
        backgroundColor: [
          "#799cff",
          "#ec8b37",
          "#4dbb6f",
          "#cc4646",
          "#767522",
          "#941225",
          "093A3E",
        ],
        hoverBackgroundColor: [
          "#799cff",
          "#ec8b37",
          "#4dbb6f",
          "#cc4646",
          "#767522",
          "#941225",
          "093A3E",
        ],
      },
    ],
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Polar Visuals</h2>
      <Polar data={data} height={200} />
    </div>
  );
}
