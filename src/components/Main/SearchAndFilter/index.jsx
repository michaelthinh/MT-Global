import Filter from "./Filter";
import Search from "./Search";

const SearchAndFilter = () => {
    return (
        <div className="flex items-center justify-between">
            <Search />
            <Filter />
        </div>
    );
};
export default SearchAndFilter;
