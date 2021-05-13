import React from "react";
import {Route} from "react-router-dom";
import ProductList from "./containers/ProductList";

const AppRouter: React.FC = (props) => {
    return (
        <div>
            <Route path={"/products"} component={ProductList} />
        </div>
    )
};
export default AppRouter;