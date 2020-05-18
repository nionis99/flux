import {ShiftFormGateway} from '../../domain/Gateway/ShiftFormGateway';
import {emptyShiftForm} from "../../domain/Entity/EmptyShiftForm/EmptyShiftForm";
import {ShiftFormOutputBoundary} from '../Boundary/Output/ShiftFormOutputBoundary';
import {ShiftFormInputBoundary} from "../Boundary/Input/ShiftFormInputBoundary";
import {androidCloseWebViewFragment, isAndroid} from '../../../android/android';
import Constants from '../../../Constants';
import AuthService from '../../infrastructure/LocalStorage/Authorization';

export class ShiftFormInteractor implements ShiftFormInputBoundary {
    private readonly shiftFormGateway: ShiftFormGateway;
    private readonly shiftFormOutputBoundary: ShiftFormOutputBoundary;

    constructor(shiftFormGateway: ShiftFormGateway, shiftFormOutputBoundary: ShiftFormOutputBoundary) {
        this.shiftFormGateway = shiftFormGateway;
        this.shiftFormOutputBoundary = shiftFormOutputBoundary;
    }

    getForm(teamId: string, leader: string) {
        return this.shiftFormGateway.loadShiftForm(teamId, leader);
    }

    saveForm() {
        return this.shiftFormGateway.saveShiftForm(emptyShiftForm)
            .then(response => this.shiftFormOutputBoundary.loadResponse(response.message))
            .catch(error => this.shiftFormOutputBoundary.loadResponse(error.message));
    }

    goHome() {
        if (isAndroid()) {
            AuthService.removeUser();
            androidCloseWebViewFragment();
        } else {
            AuthService.removeUser();
            window.location.replace(Constants.EPCR_HOME_URL);
        }
    }
}
