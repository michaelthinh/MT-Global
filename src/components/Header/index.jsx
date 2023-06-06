import Logo from "../../assets/img/mt-logo.png";
import SwitchMode from "./SwitchMode";

import { useSelector } from "react-redux";

const Header = () => {
    const theme = useSelector((state) => state.dark.theme);
    return (
        <header className={`flex justify-between px-28 py-6 ${theme} `}>
            <div href="#!" className="flex gap-5 items-center cursor-pointer">
                <img src={Logo} alt="MT-Global-Logo" className="h-10 w-10" />
                <span className="text-3xl font-bold">MT Global</span>
            </div>
            <div>
                <SwitchMode />
            </div>
        </header>
    );
};

export default Header;
