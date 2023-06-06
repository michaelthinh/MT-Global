import { useDispatch, useSelector } from "react-redux";
import {
    getCountries,
    getCountriesByRegion,
    getCountriesBySearch,
} from "../../../store/countries/countriesActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ScrollBar from "react-perfect-scrollbar";
import CountryItem from "./CountryItem";
import classes from "./Countries.module.scss";
import Loading from "../../../utils/Loading/Loading";

const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countries);
    const loading = useSelector((state) => state.countries.loading);
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
        <>
            {loading ? (
                <div className="flex justify-center h-fit mt-60">
                    <Loading />
                </div>
            ) : (
                <ScrollBar
                    style={{
                        maxHeight: "75vh",
                        overflow: "auto",
                        marginTop: "15px",
                    }}
                >
                    <div className={classes.countriesContainer}>
                        {countries.map((country, index) => (
                            <CountryItem country={country} key={index} />
                        ))}
                    </div>
                </ScrollBar>
            )}
        </>
    );
};

export default Countries;
