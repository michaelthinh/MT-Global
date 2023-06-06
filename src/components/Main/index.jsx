import Countries from "./Countries";
import SearchAndFilter from "./SearchAndFilter";

import { useSelector } from "react-redux";

const Main = () => {
    const theme = useSelector((state) => state.dark.theme);
    return (
        <div className={`py-10 px-64 h-auto ${theme}`}>
            <SearchAndFilter />
            <Countries />
        </div>
    );
};

export default Main;
