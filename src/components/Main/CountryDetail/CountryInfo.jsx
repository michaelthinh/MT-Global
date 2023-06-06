import { useSelector } from "react-redux";
import classes from "./CountryInfo.module.scss";

const CountryInfo = () => {
    const country = useSelector((state) => state.countries.selectedCountry);
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
            return result
        }
    };
    return (
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
                                <td className={classes.detailInfo__borderList}>
                                    <div
                                        className={
                                            classes.detailInfo__borderItem
                                        }
                                    >
                                        China
                                    </div>
                                    <div
                                        className={
                                            classes.detailInfo__borderItem
                                        }
                                    >
                                        India
                                    </div>
                                    {country.borders &&
                                        country.borders.map((border) => (
                                            <div
                                                className={
                                                    classes.detailInfo__borderItem
                                                }
                                                key={border}
                                            >
                                                {border}
                                            </div>
                                        ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default CountryInfo;
