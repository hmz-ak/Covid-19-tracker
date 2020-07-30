import axios from "axios";

const url = "https://api.thevirustracker.com/free-api?global=stats";
const url2 = "https://api.thevirustracker.com/free-api?countryTotals=ALL";
const url3 = "https://api.thevirustracker.com/free-api?countryTotal=";
export const fetchData = async (country) => {
  console.log(country);
  let changeAbleUrl = url3;

  if (country) {
    changeAbleUrl = `${url3}${country}`;
    console.log(changeAbleUrl);
    try {
      const response = await axios.get(changeAbleUrl);

      const dataThatWeNeed = {
        total: response.data.countrydata[0].total_cases,
        active:
          response.data.countrydata[0].total_active_cases +
          response.data.countrydata[0].total_unresolved,

        recovered: response.data.countrydata[0].total_recovered,
        deaths: response.data.countrydata[0].total_deaths,
        newCases: response.data.countrydata[0].total_new_cases_today,
        newDeaths: response.data.countrydata[0].total_new_deaths_today,
        seriousCases: response.data.countrydata[0].total_serious_cases,
      };

      return dataThatWeNeed;
    } catch (error) {}
  } else {
    country = null;
    try {
      const { data } = await axios.get(url);
      const dataThatWeNeed = {
        total: data.results[0].total_cases,
        active:
          data.results[0].total_active_cases + data.results[0].total_unresolved,

        recovered: data.results[0].total_recovered,
        deaths: data.results[0].total_deaths,
        newCases: data.results[0].total_new_cases_today,
        newDeaths: data.results[0].total_new_deaths_today,
        seriousCases: data.results[0].total_serious_cases,
        affectedCountries: data.results[0].total_affected_countries,
      };

      return dataThatWeNeed;
    } catch (error) {}
  }
};

// export const chartData = async () => {
//   try {
//     const response = await axios.get(url);
//     return response;
//   } catch (error) {}
// };

export const countryData = async () => {
  try {
    const response = await axios.get(url2);
    return response;

    // .data.countryitems.map((country) => country.title)
  } catch (error) {}
};
