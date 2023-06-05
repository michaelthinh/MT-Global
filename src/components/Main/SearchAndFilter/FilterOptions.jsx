import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import {
    FaGlobeAsia,
    FaGlobeAmericas,
    FaGlobeEurope,
    FaGlobeAfrica,
} from "react-icons/fa";

import OptionItem from "./OptionItem";

import classes from "./FilterOptions.module.scss";
import { useEffect, useRef } from "react";

const RegionList = [
    { icon: GiWorld, value: "All" },
    { icon: FaGlobeAfrica, value: "Africa" },
    { icon: FaGlobeAmericas, value: "Americas" },
    { icon: FaGlobeAsia, value: "Asia" },
    { icon: FaGlobeEurope, value: "Europe" },
    { icon: GiEarthAsiaOceania, value: "Oceania" },
];

const FilterOptions = ({ isShowOptions }) => {
    const refOptions = useRef();
    useEffect(() => {
        const showOptions = () => {
            if (isShowOptions) {
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`;
                refOptions.current.style.transform = `scaleY(1)`;
            } else {
                refOptions.current.style.maxHeight = 0;
                refOptions.current.style.transform = `scaleY(0)`;
            }
        };
        showOptions();
        document.addEventListener("resize", showOptions);
        return () => {
            document.removeEventListener("resize", showOptions);
        };
    }, [isShowOptions]);
    return (
        <div className={classes.selectBody} ref={refOptions}>
            <ul>
                {RegionList.map((region, index) => (
                    <OptionItem region={region} key={index} />
                ))}
            </ul>
        </div>
    );
};

export default FilterOptions;
