import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { countryData } from "../../api";

export const CountrySelector = ({ handleCountry }) => {
  const [country_data, set_data] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const obj_data = await countryData();
      set_data(obj_data.data.countryitems[0]);
    };
    fetchCountry();
  }, [set_data]); //that is going to let us run useEffect whenever set_data changes, it helps in selecting diff country

  return (
    <div>
      <FormControl
        style={{
          minWidth: "40%",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "30%",
          marginRight: "30%",
        }}
      >
        <NativeSelect
          defaultValue=" "
          onChange={(e) => {
            handleCountry(e.target.value);
          }}
          style={{ textAlign: "center" }}
        >
          <option value="global">Global</option>
          {Object.keys(country_data).map((key, ind) => {
            return (
              <option value={country_data[key].code} key={key}>
                {country_data[key].title}
              </option>
              // <MenuItem value={key} key={ind}>{countriesData[key].title}</MenuItem>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};
