import {AuthorizationInputBoundary} from "../../usecase/Boundary/Input/AuthorizationInputBoundary";

export class AuthorizationController {

    private readonly authorizationInteractor: AuthorizationInputBoundary;

    constructor(authorizationInteractor: AuthorizationInputBoundary) {
        this.authorizationInteractor = authorizationInteractor;
    }

    async checkIfAuthorized(jwt: string, teamId: string) {
        await this.authorizationInteractor.checkAuthorization(jwt, teamId);
    }
}
