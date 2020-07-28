import axios from "axios";

const url = "https://api.thevirustracker.com/free-api?global=stats";

export const fetchData = async () => {
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
};
