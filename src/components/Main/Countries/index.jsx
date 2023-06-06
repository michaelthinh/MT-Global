import CountryItem from "./CountryItem";
import classes from "./Countries.module.scss";

const Countries = () => {
    return (
        <div className={classes.countriesContainer}>
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
            <CountryItem />
        </div>
    );
};

export default Countries;
