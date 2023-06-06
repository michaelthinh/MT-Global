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

export const getCountryByName = (name) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(
                countriesApi + `/name/${name}?fullText=true`
            );
            const country = await response.data[0];
            return country;
        };
        try {
            const countryData = await fetchData();
            dispatch(
                countriesActions.setCountryByName({
                    country: countryData,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const getCountriesByRegion = (region) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(
                countriesApi + `/region/${region}`
            );

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

export const getCountriesBySearch = (search) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(countriesApi + `/name/${search}`);

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
