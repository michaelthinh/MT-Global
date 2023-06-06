import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./CountryInfo.module.scss";
import ScrollBar from "react-perfect-scrollbar";

const getCurrencies = (country) => {
    const currencies = country.currencies;
    if (!currencies) {
        return "No currencies found!";
    } else {
        let result = "";
        for (const key in currencies) {
            result = result + `${currencies[key].name} : (${key}) `;
        }
        return result;
    }
};
const getLanguages = (country) => {
    const languages = country.languages;
    if (!languages) {
        return "No languages found!";
    } else {
        let result = "";
        for (const key in languages) {
            result = result + `${languages[key]} `;
        }
        return result;
    }
};
const getCapitals = (country) => {
    const capitals = country.capital;
    if (!capitals) {
        return "No captials found";
    } else {
        let result = "";
        capitals.forEach((capital) => {
            result += capital;
        });
        return result;
    }
};

const CountryInfo = () => {
    const country = useSelector((state) => state.countries.selectedCountry);

    const getCountryNameByCode = async (code) => {
        const result = await axios.get(
            `https://restcountries.com/v3.1/alpha?codes=${code}`
        );
        return result.data;
    };
    const [countriesBorder, setCountriesBorder] = useState([]);
    useEffect(() => {
        if (country && country.borders) {
            getCountryNameByCode(country.borders)
                .then((res) => {
                    const countryName = res.map(
                        (country) => country.name.official
                    );
                    setCountriesBorder(countryName);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [country]);

    return (
        <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
            <div className={classes.detailInfo}>
                {country && (
                    <>
                        <h3 className={classes.countryName}>
                            {country.name.official}
                        </h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Common Name
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {!country.name.common
                                            ? "No native name found"
                                            : country.name.common}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Offical
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {!country.name.official
                                            ? "No official name found"
                                            : country.name.official}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Population
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {!country.population
                                            ? "No population found"
                                            : country.population}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Region
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {!country.region
                                            ? "No region found"
                                            : country.region}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Sub Region
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {!country.subregion
                                            ? "No sub region found"
                                            : country.subregion}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Capital
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {getCapitals(country)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Currencies
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {getCurrencies(country)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Languages
                                    </td>
                                    <td>:</td>
                                    <td className={classes.detailInfo__value}>
                                        {getLanguages(country)}
                                    </td>
                                </tr>
                                <tr>
                                    <td className={classes.detailInfo__title}>
                                        Border Countries
                                    </td>
                                    <td>:</td>
                                    <td
                                        className={
                                            classes.detailInfo__borderList
                                        }
                                    >
                                        {countriesBorder
                                            ? countriesBorder.map((border) => (
                                                  <Link
                                                      key={border}
                                                      to={`/country/${border}`}
                                                  >
                                                      <div
                                                          className={
                                                              classes.detailInfo__borderItem
                                                          }
                                                      >
                                                          {border}
                                                      </div>
                                                  </Link>
                                              ))
                                            : "No countries border found"}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </ScrollBar>
    );
};

export default CountryInfo;
