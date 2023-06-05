import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { darkActions } from "../../store/darkSlice";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import classes from "./SwitchMode.module.scss";

const SwitchMode = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.dark.isDark);
    const toggleHandler = () => {
        inputRef.current.checked = !inputRef.current.checked;
        dispatch(darkActions.toggleDark());
    };
    return (
        <div
            htmlFor="darkToggler"
            className={classes.toggleSwitch}
            onClick={toggleHandler}
        >
            <input
                type="checkbox"
                className={classes.toggleInput}
                ref={inputRef}
            />
            <div className={classes.toggleIcon}>
                {isDark ? (
                    <BsMoonFill className="text-white" />
                ) : (
                    <BsSunFill className="text-yellow-300" />
                )}
            </div>
            <div className={classes.toggleCircle}></div>
        </div>
    );
};

export default SwitchMode;
