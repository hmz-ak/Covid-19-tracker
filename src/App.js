import React, { useEffect, useState } from "react";
import "./App.css";
import { CountrySelector, Papers } from "./components";
import { fetchData } from "./api";
import { ChartGrid } from "./components/Chart/chartGrid";
function App() {
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  useEffect(() => {
    async function fetch() {
      const data1 = await fetchData();
      setData(data1);
    }
    fetch();
  }, []);

  // useEffect(() => {
  //   const fetchCountry = async () => {
  //     const obj_data = await countryData();
  //     set_data(obj_data.data.countryitems[0]);
  //   };
  //   fetchCountry();
  // }, [set_data]); //that is going to let us run useEffect whenever set_data changes, it helps in selecting diff country
  // console.log(country_data);

  const handleCountry = async (country) => {
    const data1 = await fetchData(country);
    console.log(country);
    setCountry(await data1);
  };
  console.log(data, country);

  if (!country) {
    return (
      <div>
        <Papers data={data} />
        <CountrySelector handleCountry={handleCountry} />
        <ChartGrid />
      </div>
    );
  } else {
    return (
      <div>
        <Papers data={country} />
        <CountrySelector handleCountry={handleCountry} />
        <ChartGrid data={data} country={country} />
      </div>
    );
  }
}

export default App;
