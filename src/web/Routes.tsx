import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Template from './components/Layout/Template';
import Team from './pages/Team';
import Cleaning from './pages/Cleaning';
import MedicalEquipment from './pages/MedicalEquipment';
import CarEquipment from './pages/CarEquipment';
import Authorization from "./pages/Authorization";
import Unauthorized from './pages/Unauthorized';
import Constants from '../Constants';

const browserHistory = createBrowserHistory();

interface RouteProps {
    path: string
    component: React.ReactNode;
}

function Routes() {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path={Constants.APP_PAGES.UNAUTHORIZED} component={Unauthorized}/>
                <Route exact path={Constants.APP_PAGES.AUTHORIZATION} component={Authorization}/>
                <ProtectedRoute path={Constants.APP_PAGES.TEAM} component={<Team/>}/>
                <ProtectedRoute path={Constants.APP_PAGES.CLEANING} component={<Cleaning/>}/>
                <ProtectedRoute path={Constants.APP_PAGES.MEDICAL_EQUIPMENT} component={<MedicalEquipment/>}/>
                <ProtectedRoute path={Constants.APP_PAGES.CAR_EQUIPMENT} component={<CarEquipment/>}/>
                <Route component={Unauthorized}/>
            </Switch>
        </Router>
    );
}

function ProtectedRoute(props: RouteProps) {
    const {path, component} = props;
    return (
        <Route exact path={path}>
            {localStorage.getItem(Constants.LOCAL_STORAGE_USER)
                ? <Template>{component}</Template>
                : <Redirect to={Constants.APP_PAGES.UNAUTHORIZED}/>
            }
        </Route>
    );
}

export default Routes;
