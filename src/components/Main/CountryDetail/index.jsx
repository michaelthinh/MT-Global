import { useDispatch, useSelector } from "react-redux";
import classes from "./CountryDetail.module.scss";
import CountryInfo from "./CountryInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCountryByName } from "../../../store/countries/countriesActions";
import Loading from "../../../utils/Loading/Loading";

const CountryDetail = (props) => {
    const theme = useSelector((state) => state.dark.theme);
    const loading = useSelector((state) => state.countries.loading);
    const slug = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const goBackHandler = () => {
        navigate(-1);
    };
    const country = useSelector((state) => state.countries.selectedCountry);
    useEffect(() => {
        dispatch(getCountryByName(slug.countryName));
    }, [slug.countryName, dispatch]);
    return (
        <>
            {loading ? (
                <div className="flex justify-center mt-60">
                    <Loading />
                </div>
            ) : (
                <div className={`${classes.detailWrapper} ${theme}`}>
                    <div className={classes.goBackBtn} onClick={goBackHandler}>
                        Go back
                    </div>
                    <div className={classes.detailContainer}>
                        <div className={classes.detailFlag}>
                            <img
                                src={
                                    country
                                        ? country.flags.png
                                        : "https://via.placeholder.com/300x200?text=Image+Error"
                                }
                                alt="Country flag"
                            />
                        </div>
                        <CountryInfo />
                    </div>
                </div>
            )}
        </>
    );
};

export default CountryDetail;
