import { useDispatch, useSelector } from "react-redux";
import {
    getCountries,
    getCountriesByRegion,
    getCountriesBySearch,
} from "../../../store/countries/countriesActions";
import { useEffect } from "react";

import ScrollBar from "react-perfect-scrollbar";
import CountryItem from "./CountryItem";
import classes from "./Countries.module.scss";
import { useParams } from "react-router-dom";

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    const slug = useParams();
    useEffect(() => {
        if (slug.regionName) {
            dispatch(getCountriesByRegion(slug.regionName));
        } else if (slug.search) {
            dispatch(getCountriesBySearch(slug.search));
        } else {
            dispatch(getCountries());
        }
    }, [dispatch, slug.regionName, slug.search]);

    return (
        <ScrollBar
            style={{ maxHeight: "70vh", overflow: "auto", marginTop: "20px" }}
        >
            <div className={classes.countriesContainer}>
                {countries.map((country, index) => (
                    <CountryItem country={country} key={index} />
                ))}
            </div>
        </ScrollBar>
    );
};

export default Countries;
