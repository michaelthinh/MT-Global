import { useEffect, useRef, useState } from "react";

import { FaChevronDown } from "react-icons/fa";

import classes from "./FilterList.module.scss";
import FilterOptions from "./FilterOptions";
import { useParams } from "react-router-dom";

const Filter = () => {
    const selectRef = useRef();
    const [isShowOptions, setIsShowOptions] = useState(false);
    const { regionName } = useParams();
    const [regionSelected, setRegionSelected] = useState("All");
    const showOptionsHandler = (e) => {
        if (selectRef.current) {
            setIsShowOptions(selectRef.current.contains(e.target));
        }
    };
    useEffect(() => {
        if (regionName) {
            setRegionSelected(regionName);
        } else {
            setRegionSelected("All");
        }
    }, [regionName]);
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
            <h2 className="text-2xl font-semibold">Filter by continents</h2>
            <div className={classes.selectSection}>
                <div
                    className={classes.selectHead}
                    onClick={showOptionsHandler}
                    ref={selectRef}
                >
                    <span>{regionSelected}</span>
                    <FaChevronDown />
                </div>
                <FilterOptions isShowOptions={isShowOptions} />
            </div>
        </div>
    );
};

export default Filter;
