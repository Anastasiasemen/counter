import React from "react";
import { Route, Switch } from "react-router-dom";

import { ROUTES } from "./routeNames";
import CounterContainer from "../Pages/CounterPage/containers/CounterContainer";
import HomePageContainer from "../Pages/HomePage/containers/HomePageContainer";

const Routes = () => {
    return (
        <Switch> /* компонент из react-dom библ */
            <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer}/>
            <Route path={ROUTES.COUNTER_PAGE} component={CounterContainer}/>
        </Switch>
    );
};

export default Routes;
/* Route- сам путь к нашему компоненту;
   path - "вот по этому адресу";
   component={} - что будет показываться по этому адресу;
   exact - когда мы заворачиваем в Switch, идет поверхностное сравнение,
   а exact говорит сравнивать дико строго, более точно сверять пкти роутеру
*/