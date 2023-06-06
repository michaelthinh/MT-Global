import { useSelector } from "react-redux";
import classes from "./CountryItem.module.scss";

const CountryItem = (props) => {
    const theme = useSelector((state) => state.dark.theme);
    const { country } = props;
    return (
        <div className={`${classes.countryCard} ${theme}`}>
            <div className={classes.countryFlag}>
                <img src={country.flag} alt="flag" />
            </div>
            <div className={classes.countryInfo}>
                <h3>{country.name}</h3>
                <div>
                    Population:
                    <span> {country.population}</span>
                </div>
                <div>
                    Region:
                    <span> {country.region}</span>
                </div>
                <div>
                    Capital:
                    <span> {country.capital}</span>
                </div>
            </div>
        </div>
    );
};

export default CountryItem;
