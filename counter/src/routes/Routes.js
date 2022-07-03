import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routeNames";
import CounterContainer from "../Pages/CounterPage/containers/CounterContainer";
import HomePageContainer from "../Pages/HomePage/containers/HomePageContainer";

const Routes = () => {
    return (
        <Switch> 
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.COUNTER_PAGE} component={CounterContainer}/>
        </Switch>
    );
};

export default Routes;
