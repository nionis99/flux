import {ShiftFormGateway} from '../../domain/Gateway/ShiftFormGateway';
import {ShiftFormTypes} from '../../domain/Entity/ShiftForm/ShiftFormTypes';
import {emptyShiftForm} from '../../domain/Entity/EmptyShiftForm/EmptyShiftForm';
import {ShiftFormResponseTypes} from '../../domain/Entity/ShiftForm/ShiftFormResponseTypes';
import {AuthorizationTypes} from '../../domain/Entity/Authorization/AuthorizationTypes';
import AuthService from '../LocalStorage/Authorization';
import Constants from '../../../Constants';
import axios from "axios";
import {replaceObjectValues} from '../../../helpers/replaceObjectValues';

const SHIFT_FORM_VALID_RESPONSE = {message: Constants.MESSAGE_OF_SUCCESS};
const SHIFT_FORM_FAILURE_RESPONSE = {message: Constants.MESSAGE_OF_FAILURE};
const IS_VALID_TRUE = {isValid: true};
const IS_VALID_FALSE = {isValid: false};

export class RestShiftFormGateway implements ShiftFormGateway {

    checkAuthorization(jwt: string, teamId: string): Promise<AuthorizationTypes> {
        return new Promise<AuthorizationTypes>((resolve, reject) => {
            axios.post(Constants.API_AUTH_URL, JSON.stringify({token: jwt}))
                .then(response => {
                    if (response.data.token) {
                        AuthService.addUser(response.data.token, teamId);
                        resolve(IS_VALID_TRUE);
                    }
                }).catch(error => {
                reject(IS_VALID_FALSE);
            });
        });
    }

    loadShiftForm(teamId: string, leader: string): Promise<any> {
        const authHeader = AuthService.getAuthHeader();
        const currentDateTime = new Date().toISOString();
        const queryParamUrl = `?teamId=${teamId}&leader=${leader}&datetime=${currentDateTime}`;
        return new Promise<ShiftFormResponseTypes>((resolve, reject) => {
            axios.get(Constants.API_SHIFT_JOURNAL_URL + queryParamUrl, {headers: authHeader})
                .then(response => {
                    replaceObjectValues(emptyShiftForm, response.data);
                    resolve();
                }).catch(error => {
                if (error.response.status === 401) {
                    AuthService.removeUser();
                    window.location.replace(Constants.APP_PAGES.UNAUTHORIZED);
                }
            });
        });
    }

    saveShiftForm(shiftForm: ShiftFormTypes): Promise<ShiftFormResponseTypes> {
        const authHeader = AuthService.getAuthHeader();
        return new Promise<ShiftFormResponseTypes>((resolve, reject) => {
            axios.post(Constants.API_SHIFT_JOURNAL_URL, JSON.stringify(emptyShiftForm), {headers: authHeader})
                .then(response => resolve(SHIFT_FORM_VALID_RESPONSE))
                .catch(error => {
                    if (error.response.status === 401) {
                        AuthService.removeUser();
                        window.location.replace(Constants.APP_PAGES.UNAUTHORIZED);
                    }
                    reject(SHIFT_FORM_FAILURE_RESPONSE)
                });
        });
    }
}
