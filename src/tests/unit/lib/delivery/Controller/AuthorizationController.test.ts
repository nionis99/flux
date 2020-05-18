import {mock} from 'jest-mock-extended';
import {AuthorizationController} from "../../../../../lib/delivery/Controller/AuthorizationController";
import {AuthorizationInputBoundary} from "../../../../../lib/usecase/Boundary/Input/AuthorizationInputBoundary";

describe('unit | lib | delivery | Controller | AuthorizationController', () => {

    let controller: AuthorizationController;
    let interactor: AuthorizationInputBoundary;

    beforeEach(() => {
        interactor = mock<AuthorizationInputBoundary>();
        controller = new AuthorizationController(interactor);
    });

    it('should call interactor method', () => {
        const jwt: string = "validation123";
        const teamId: string = "1";
        controller.checkIfAuthorized(jwt, teamId);
        expect(interactor.checkAuthorization).toHaveBeenCalledWith(jwt, teamId);
    });
});
