import {mock} from 'jest-mock-extended';
import {ShiftFormGateway} from '../../../../../lib/domain/Gateway/ShiftFormGateway';
import {AuthorizationInputBoundary} from "../../../../../lib/usecase/Boundary/Input/AuthorizationInputBoundary";
import {AuthorizationOutputBoundary} from "../../../../../lib/usecase/Boundary/Output/AuthorizationOutputBoundary";
import {AuthorizationInteractor} from "../../../../../lib/usecase/Interactor/AuthorizationInteractor";

describe('unit | lib | usecase | Interactor | AuthorizationInteractor', () => {

    let interactor: AuthorizationInputBoundary;
    let mockOutputBoundary: AuthorizationOutputBoundary;
    let mockGateway: any;

    beforeEach(() => {
        mockGateway = mock<ShiftFormGateway>();
        mockOutputBoundary = mock<AuthorizationOutputBoundary>();
        interactor = new AuthorizationInteractor(mockGateway, mockOutputBoundary);
    });

    it('should check is valid epcr jwt token', async () => {
        const jwt: string = "Validation123";
        const teamId: string = "1";
        const isValid: boolean = false;
        const response = {isValid};
        mockGateway.checkAuthorization.mockResolvedValue(response);
        await interactor.checkAuthorization(jwt, teamId);
        expect(mockOutputBoundary.loadIsValidated).toHaveBeenCalledWith(isValid);
    });
});
