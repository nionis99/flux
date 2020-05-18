import React, {useContext, useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Constants from '../../Constants';
import Loading from "../components/Content/Loading/Loading";
import {appContext} from "../App";
import {AuthorizationModel} from "../models/AuthorizationModel";
import {emptyShiftForm} from "../../lib/domain/Entity/EmptyShiftForm/EmptyShiftForm";

const jwtLib = require('jsonwebtoken');
const queryString = require('query-string');

interface Props {
    location: {
        search: string
    },
    history: {
        push(url: string): void;
    }
}

function Authorization(props: Props) {
    const params = queryString.parse(props.location.search);
    const teamId = params.teamId;
    const jwt = params.jwt;
    const teamForm = emptyShiftForm.team;
    const [loading, setLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean>();
    const {builder} = useContext(appContext);
    const authController = builder.createAuthorizationController(new AuthorizationModel(setIsValid));
    const objectController = builder.createBaseController(teamForm);
    const shiftFormController = builder.createShiftFormController();

    const useMountEffect = (fun: React.EffectCallback) => useEffect(fun, []);

    useMountEffect(checkAuthorization);

    function checkIfTokenExist() {
        return !!localStorage.getItem(Constants.LOCAL_STORAGE_USER)
            && localStorage.getItem(Constants.LOCAL_STORAGE_TEAM_ID);
    }

    function checkIfQueryParamsExist() {
        return (jwt && teamId) ? checkIfTokenValid(jwt, teamId) : goToUnauthorized();
    }

    function goToUnauthorized() {
        return props.history.push(Constants.APP_PAGES.UNAUTHORIZED);
    }

    async function goToApp() {
        const teamId = localStorage.getItem(Constants.LOCAL_STORAGE_TEAM_ID);
        await setTeamIdAndLeaderValues(teamId);
        return props.history.push(Constants.APP_PAGES.TEAM);
    }

    function checkAuthorization() {
        checkIfTokenExist() ? goToApp() : checkIfQueryParamsExist();
    }

    async function checkIfTokenValid(jwt: string, teamId: string) {
        await authController.checkIfAuthorized(jwt, teamId);
        await setTeamIdAndLeaderValues(teamId);
        setLoading(false);
    }

    async function setTeamIdAndLeaderValues(teamId: string | null) {
        const token = localStorage.getItem(Constants.LOCAL_STORAGE_USER);
        objectController.setPropertyValue('id', teamId);
        if (token && teamId) {
            const decodedToken = jwtLib.decode(token);
            if (decodedToken && 'sub' in decodedToken) {
                await shiftFormController.getForm(teamId, decodedToken.sub);
                objectController.setPropertyValue('leader', decodedToken.sub)
            }
        }
    }

    function checkRedirection() {
        return isValid ? redirectToShiftJournalPage() : redirectToUnauthorizedPage();
    }

    function redirectToUnauthorizedPage() {
        return <Redirect to={Constants.APP_PAGES.UNAUTHORIZED}/>
    }

    function redirectToShiftJournalPage() {
        return <Redirect to={Constants.APP_PAGES.TEAM}/>
    }

    return loading ? <Loading/> : checkRedirection();
}

export default Authorization;
