import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "region/:regionName",
                element: <Home />,
            },
            {
                path: "country/:countryName",
                element: <Detail />,
            },
            {
                path: "search/:search",
                element: <Search />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
