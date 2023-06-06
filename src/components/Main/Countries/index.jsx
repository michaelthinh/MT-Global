import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../../store/countries/countriesActions";
import { useEffect } from "react";

import ScrollBar from "react-perfect-scrollbar";
import CountryItem from "./CountryItem";
import classes from "./Countries.module.scss";

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    useEffect(() => {
        dispatch(getCountries());
    }, []);

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
