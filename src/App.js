import React, { useEffect, useState } from "react";
import "./App.css";
import { Chart, CountrySelector, Papers } from "./components";
import { fetchData } from "./api";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetch() {
      const data1 = await fetchData();
      setData(data1);
    }
    fetch();
  }, []);
  console.log(data);
  return (
    <div>
      <Papers data={data} />
      <CountrySelector />
      <Chart />
    </div>
  );
}

export default App;
