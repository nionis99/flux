import {mock} from 'jest-mock-extended';
import {ShiftFormGateway} from "../../../lib/domain/Gateway/ShiftFormGateway";
import {FakeShiftFormGateway} from '../../../lib/infrastructure/Fake/FakeShiftFormGateway';
import {AuthorizationInputBoundary} from "../../../lib/usecase/Boundary/Input/AuthorizationInputBoundary";
import {AuthorizationController} from "../../../lib/delivery/Controller/AuthorizationController";
import {AuthorizationPresenter} from "../../../lib/delivery/Presenter/AuthorizationPresenter";
import {AuthorizationViewModel} from "../../../lib/delivery/ViewModel/AuthorizationViewModel";
import {AuthorizationInteractor} from "../../../lib/usecase/Interactor/AuthorizationInteractor";

const fakeJwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9" +
    ".eyJzdWIiOiJQcm9qZWN0IFgiLCJlSWQiOiJDWUNMT1AiLCJsbiI6IlpWRVIiLCJzdGF0IjoiOTkiLCJzZXJ2IjoiU1RBR0lORyJ9" +
    "._np1P_e9V6mZMpAK_Py9vuW0VTmvmWYuh8FOU8YM7E4wHxqMcZu6VQ7I949-snAxR_g9yp2VTBBCdPh8_Cj29A";

describe('integration / lib / AuthorizationStructure', () => {

    let interactor: AuthorizationInputBoundary;
    let controller: AuthorizationController;
    let fakeShiftFormGateway: ShiftFormGateway;
    let presenter: AuthorizationPresenter;
    let mockViewModel: AuthorizationViewModel;

    beforeEach(() => {
        fakeShiftFormGateway = new FakeShiftFormGateway();
        mockViewModel = mock<AuthorizationViewModel>();
        presenter = new AuthorizationPresenter(mockViewModel);
        interactor = new AuthorizationInteractor(fakeShiftFormGateway, presenter);
        controller = new AuthorizationController(interactor);
    });

    it('should check if epcr jwt token valid and return true', async () => {
        const jwt: string = fakeJwt;
        const teamId: string = "1";
        const isValid: boolean = true;
        await controller.checkIfAuthorized(jwt, teamId);
        expect(mockViewModel.setIsValidated).toHaveBeenCalledWith(isValid);
    });

    it('should check if epcr jwt token valid and return false', async () => {
        const jwt: string = "Knašas123";
        const teamId: string = "1";
        const isValid: boolean = false;
        await controller.checkIfAuthorized(jwt, teamId);
        expect(mockViewModel.setIsValidated).toHaveBeenCalledWith(isValid);
    });


});
