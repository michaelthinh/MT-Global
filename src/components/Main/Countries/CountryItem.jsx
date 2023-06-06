import { useSelector } from "react-redux";
import classes from "./CountryItem.module.scss";

const CountryItem = (props) => {
    const theme = useSelector((state) => state.dark.theme);
    return (
        <div className={`${classes.countryCard} ${theme}`}>
            <div className={classes.countryFlag}>
                <img
                    src="https://i5.walmartimages.com/asr/ab69a8c8-1cf6-4d21-aea6-e10947a2caa8.db0198c48db24b262411913205f71328.jpeg"
                    alt="flag"
                />
            </div>
            <div className={classes.countryInfo}>
                <h3>USA</h3>
                <div>
                    Population:
                    <span> 99.999.999</span>
                </div>
                <div>
                    Region:
                    <span> America</span>
                </div>
                <div>
                    Capital:
                    <span> Washington DC</span>
                </div>
            </div>
        </div>
    );
};

export default CountryItem;
