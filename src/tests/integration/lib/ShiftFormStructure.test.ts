import {mock} from 'jest-mock-extended';
import {ShiftFormGateway} from "../../../lib/domain/Gateway/ShiftFormGateway";
import {FakeShiftFormGateway} from '../../../lib/infrastructure/Fake/FakeShiftFormGateway';
import {ShiftFormInputBoundary} from "../../../lib/usecase/Boundary/Input/ShiftFormInputBoundary";
import {ShiftFormController} from "../../../lib/delivery/Controller/ShiftFormController";
import {ShiftFormInteractor} from "../../../lib/usecase/Interactor/ShiftFormInteractor";
import {ShiftFormPresenter} from "../../../lib/delivery/Presenter/ShiftFormPresenter";
import {ShiftFormViewModel} from "../../../lib/delivery/ViewModel/ShiftFormViewModel";
import {ShiftFormOutputBoundary} from "../../../lib/usecase/Boundary/Output/ShiftFormOutputBoundary";
import {fakeShiftForm} from '../../../lib/domain/Entity/Fake/FakeShiftForm';

describe('integration / lib / ShiftFormStructure', () => {

    let interactor: ShiftFormInputBoundary;
    let controller: ShiftFormController;
    let fakeShiftFormGateway: ShiftFormGateway;
    let presenter: ShiftFormOutputBoundary;
    let mockViewModel: ShiftFormViewModel;

    beforeEach(() => {
        fakeShiftFormGateway = new FakeShiftFormGateway();
        mockViewModel = mock<ShiftFormViewModel>();
        presenter = new ShiftFormPresenter(mockViewModel);
        interactor = new ShiftFormInteractor(fakeShiftFormGateway, presenter);
        controller = new ShiftFormController(interactor);
    });

    it('should save form data', async () => {
        const message = "Success";
        await controller.saveForm();
        expect(mockViewModel.setResponse).toHaveBeenCalledWith(message);
    });

    it('should get from data', async () => {
        const teamId = "9999";
        const leader = "Project X"
        await controller.getForm(teamId, leader);
        expect(fakeShiftForm.team.id).toBe(teamId);
        expect(fakeShiftForm.team.leader).toBe(leader);
    });
});
