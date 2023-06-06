import { useNavigate } from "react-router-dom";
import classes from "./OptionItem.module.scss";
import { useSelector } from "react-redux";

const OptionItem = (props) => {
    const theme = useSelector((state) => state.dark.theme);
    const { region } = props;
    const navigate = useNavigate();
    const changeRegionHandler = () => {
        if (region.value !== "All") {
            navigate(`/region/${region.value}`);
        } else {
            navigate("/");
        }
    };
    return (
        <li
            className={`${classes.selectItem} ${theme}`}
            onClick={changeRegionHandler}
        >
            <region.icon />
            <span>{region.value}</span>
        </li>
    );
};

export default OptionItem;
