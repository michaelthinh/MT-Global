import { countriesActions } from "./countriesSlice";

const countriesApi = "https://restcountries.com/v3.1";

import axios from "axios";

export const getCountries = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(countriesApi + "/all");

            const countries = await response.data.map((country) => ({
                name: country.name.official,
                capital: country.capital,
                population: new Intl.NumberFormat().format(country.population),
                region: country.region,
                flag: country.flags.png,
            }));
            return countries;
        };
        try {
            const countriesData = await fetchData();
            dispatch(
                countriesActions.updateCountries({
                    countries: countriesData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};
