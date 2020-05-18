import {ShiftFormGateway} from '../../domain/Gateway/ShiftFormGateway';
import {AuthorizationInputBoundary} from "../Boundary/Input/AuthorizationInputBoundary";
import {AuthorizationOutputBoundary} from "../Boundary/Output/AuthorizationOutputBoundary";

export class AuthorizationInteractor implements AuthorizationInputBoundary {
    private readonly shiftFormGateway: ShiftFormGateway;
    private readonly authorizationOutputBoundary: AuthorizationOutputBoundary;

    constructor(shiftFormGateway: ShiftFormGateway, authorizationOutputBoundary: AuthorizationOutputBoundary) {
        this.shiftFormGateway = shiftFormGateway;
        this.authorizationOutputBoundary = authorizationOutputBoundary;
    }

    checkAuthorization(jwt: string, teamId: string) {
        return this.shiftFormGateway.checkAuthorization(jwt, teamId)
            .then(result => this.authorizationOutputBoundary.loadIsValidated(result.isValid))
            .catch(error => this.authorizationOutputBoundary.loadIsValidated(error.isValid));
    }

    loadForm(teamId: string, leader: string) {
        return this.shiftFormGateway.loadShiftForm(teamId, leader);
    }
}
