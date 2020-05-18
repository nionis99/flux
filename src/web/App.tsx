import React from 'react';
import {ShiftFormGateway} from '../lib/domain/Gateway/ShiftFormGateway';
import {RestShiftFormGateway} from '../lib/infrastructure/Rest/RestShiftFormGateway';
import ControllerBuilder from './ControllerBuilder';
import Routes from './Routes';
import {FakeShiftFormGateway} from "../lib/infrastructure/Fake/FakeShiftFormGateway";

let appContext: React.Context<any>;

interface Props {
    gateway: ShiftFormGateway;
    children: any;
}

function App() {
    return (
        <AppBuilder gateway={new RestShiftFormGateway()}>
            <Routes/>
        </AppBuilder>
    );
}

function TestApp() {
    return (
        <AppBuilder gateway={new FakeShiftFormGateway()}>
            <Routes/>
        </AppBuilder>
    );
}

function AppBuilder(props: Props) {
    const builder = new ControllerBuilder(props.gateway);
    appContext = React.createContext({builder});
    return (
        <appContext.Provider value={{builder}}>
            {props.children}
        </appContext.Provider>
    );
};


export {appContext, AppBuilder, App, TestApp};
