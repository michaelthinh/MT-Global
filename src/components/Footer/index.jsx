import { useSelector } from "react-redux";
import classes from "./Footer.module.scss";

const Footer = () => {
    const theme = useSelector((state) => state.dark.theme);
    return (
        <div className={`${classes.footer} ${theme}`}>
            <h4>Copyright &copy; Michael Thinh</h4>
            <p>Contact me: michaelthinh1008@gmail.com</p>
        </div>
    );
};

export default Footer;
