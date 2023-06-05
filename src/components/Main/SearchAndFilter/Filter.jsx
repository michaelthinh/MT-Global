import { useEffect, useRef, useState } from "react";

import { GiWorld, GiEarthAsiaOceania } from "react-icons/gi";
import {
    FaGlobeAsia,
    FaGlobeAmericas,
    FaGlobeEurope,
    FaGlobeAfrica,
    FaChevronDown,
} from "react-icons/fa";

import classes from "./FilterList.module.scss";

const Filter = () => {
    const selectRef = useRef();
    const [isShowOptions, setIsShowOptions] = useState(false);
    const showOptionsHandler = (e) => {
        if (selectRef.current) {
            setIsShowOptions(selectRef.current.contains(e.target));
        }
    };
    useEffect(() => {
        if (isShowOptions) {
            document.addEventListener("click", showOptionsHandler);
            return () => {
                document.removeEventListener("click", showOptionsHandler);
            };
        }
    }, [isShowOptions]);
    return (
        <div>
            <h2 className="ext-2xl font-semibold">Filter by continents</h2>
            <div className={classes.selectSection}>
                <div
                    className={classes.selectHead}
                    onClick={showOptionsHandler}
                    ref={selectRef}
                >
                    <span>All</span>
                    <FaChevronDown />
                </div>
                {isShowOptions && (
                    <div className={classes.selectBody}>
                        <ul>
                            <li className={classes.selectItem}>
                                <GiWorld />
                                <span>All</span>
                            </li>
                            <li className={classes.selectItem}>
                                <FaGlobeAfrica />
                                <span>Africa</span>
                            </li>
                            <li className={classes.selectItem}>
                                <FaGlobeAmericas />
                                <span>Americas</span>
                            </li>
                            <li className={classes.selectItem}>
                                <FaGlobeAsia />
                                <span>Asia</span>
                            </li>
                            <li className={classes.selectItem}>
                                <FaGlobeEurope />
                                <span>Europe</span>
                            </li>
                            <li className={classes.selectItem}>
                                <GiEarthAsiaOceania />
                                <span>Oceania</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;
