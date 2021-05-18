import React from "react";
import {Route, Switch} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
import Demo from "./Demo";
import Login from "./containers/Login";
import Container from "./components/Container";
import Profile from "./containers/Profile";
import PrivateRoute from "./components/PrivateRoute"; 
import CartList from "./containers/CartList";
import Registration from "./containers/Registration";

const AppRouter: React.FC = (props) => {
    return (
        
            <Switch>
                <Route path={"/"} component={Demo} exact />
                <PrivateRoute path={"/products"} component={ProductList}/> 
                {/* <Route path={"/productdetails/:id"} component={ProductDetails} /> */}
                <Route path={"/login"} component={Login}/>
                <Route path={"/register"} component={Registration}/>
                <PrivateRoute path={"/profile"} component={Profile}/>
                <PrivateRoute path={"/cart"} component={CartList}/> 
                <Route component={ErrorPage} />
            </Switch>
        
    )
};
export default AppRouter;