import React, { useEffect, useState } from "react";
import "./App.css";
import { CountrySelector, Papers } from "./components";
import { fetchData } from "./api";
import { ChartGrid } from "./components/Chart/chartGrid";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetch() {
      const data1 = await fetchData();
      setData(data1);
    }
    fetch();
  }, []);

  return (
    <div>
      <Papers data={data} />
      <CountrySelector />
      <ChartGrid />
    </div>
  );
}

export default App;
