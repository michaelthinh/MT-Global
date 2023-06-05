import { useEffect, useRef, useState } from "react";

import { FaChevronDown } from "react-icons/fa";

import classes from "./FilterList.module.scss";
import FilterOptions from "./FilterOptions";

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
            <h2 className="text-2xl font-semibold">Filter by continents</h2>
            <div className={classes.selectSection}>
                <div
                    className={classes.selectHead}
                    onClick={showOptionsHandler}
                    ref={selectRef}
                >
                    <span>All</span>
                    <FaChevronDown />
                </div>
                <FilterOptions isShowOptions={isShowOptions} />
            </div>
        </div>
    );
};

export default Filter;
