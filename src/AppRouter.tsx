import React from "react";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ProductList from "./containers/ProductList";
import Demo from "./Demo";

const AppRouter: React.FC = (props) => {
    return (
        <Switch>
            <Route path={"/"} component={Demo} exact />
            <Route path={"/products"} component={ProductList}/>
            <Route component={ErrorPage} />
        </Switch>
    )
};
export default AppRouter;