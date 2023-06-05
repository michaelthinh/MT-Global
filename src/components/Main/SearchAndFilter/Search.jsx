import { useSelector } from "react-redux";

import { BsSearch } from "react-icons/bs";

const Search = () => {
    const isDark = useSelector((state) => state.dark.isDark);
    return (
        <div className="max-w-md w-full">
            <h2 className="text-2xl font-semibold">Search a country:</h2>
            <div className="flex items-center justify-between w-full h-8 mt-8">
                <input
                    type="text"
                    className={`mr-4 overflow-hidden placeholder:italic placeholder:text-slate-400 placeholder:text-md w-full p-2 focus:outline-none focus:border-b-2 shadow-gray-800 ${
                        isDark ? "bg-[#222]" : ""
                    }`}
                    defaultValue=""
                    placeholder="Search for any country"
                />
                <button>
                    <BsSearch className="h-full w-full p-2 text-center opacity-75 transition-opacity duration-200 hover:opacity-100 font-bold text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Search;
