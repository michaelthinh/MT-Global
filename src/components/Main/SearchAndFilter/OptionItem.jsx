import { useNavigate } from "react-router-dom";
import classes from "./OptionItem.module.scss";

const OptionItem = (props) => {
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
        <li className={classes.selectItem} onClick={changeRegionHandler}>
            <region.icon />
            <span>{region.value}</span>
        </li>
    );
};

export default OptionItem;
