import axios from "axios";
const url3 = "https://api.thevirustracker.com/free-api?countryTotal=";

export const fetchDataCountry = async (country) => {
  let changeAbleUrl = url3;
  changeAbleUrl = `${url3}${country}`;
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
};
