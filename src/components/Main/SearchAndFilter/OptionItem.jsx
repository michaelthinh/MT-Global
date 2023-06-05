import classes from "./OptionItem.module.scss";

const OptionItem = (props) => {
    const { region } = props;
    return (
        <li className={classes.selectItem}>
            <region.icon />
            <span>{region.value}</span>
        </li>
    );
};

export default OptionItem;
