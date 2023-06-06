import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

const Search = () => {
    const [valueInput, setValueInput] = useState("");
    const navigate = useNavigate();
    const inputChangeHandler = (e) => {
        setValueInput(e.target.value);
    };
    const keyDownHandler = (e) => {
        if (e.keyCode === 13) {
            valueInput !== ""
                ? navigate(`/search/${valueInput}`)
                : navigate("/");
        }
    };
    return (
        <div className="max-w-md w-full">
            <h2 className="text-2xl font-semibold">Search a country:</h2>
            <div className="flex items-center justify-between w-full h-8 mt-8">
                <input
                    type="text"
                    className="mr-4 !text-black overflow-hidden placeholder:italic placeholder:text-slate-400 placeholder:text-md w-full p-2 focus:outline-none focus:border-b-2"
                    placeholder="Search for any country"
                    value={valueInput}
                    onChange={inputChangeHandler}
                    onKeyDown={keyDownHandler}
                />
                <Link to={valueInput !== "" ? `/search/${valueInput}` : `/`}>
                    <button>
                        <BsSearch className="h-full w-full p-2 text-center opacity-75 transition-opacity duration-200 hover:opacity-100 font-bold text-2xl" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Search;
