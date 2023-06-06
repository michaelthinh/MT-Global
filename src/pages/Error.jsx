import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Error = () => {
    const theme = useSelector((state) => state.dark.theme);
    return (
        <div className={theme}>
            <Header />

            <p className="text-center mt-96">
                Cannot direct to the path you typed
            </p>

            <Footer />
        </div>
    );
};

export default Error;
