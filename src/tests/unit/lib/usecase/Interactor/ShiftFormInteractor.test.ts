import {mock} from 'jest-mock-extended';
import {ShiftFormGateway} from '../../../../../lib/domain/Gateway/ShiftFormGateway';
import {ShiftFormInputBoundary} from "../../../../../lib/usecase/Boundary/Input/ShiftFormInputBoundary";
import {ShiftFormOutputBoundary} from "../../../../../lib/usecase/Boundary/Output/ShiftFormOutputBoundary";
import {ShiftFormInteractor} from "../../../../../lib/usecase/Interactor/ShiftFormInteractor";

describe('unit | lib | usecase | Interactor | ShiftFormInteractor', () => {

    let interactor: ShiftFormInputBoundary;
    let mockOutputBoundary: ShiftFormOutputBoundary;
    let mockGateway: any;

    beforeEach(() => {
        mockGateway = mock<ShiftFormGateway>();
        mockOutputBoundary = mock<ShiftFormOutputBoundary>();
        interactor = new ShiftFormInteractor(mockGateway, mockOutputBoundary);
    });

    it('should save form data', async () => {
        const message = "Success";
        const response = {message};
        mockGateway.saveShiftForm.mockResolvedValue(response);
        await interactor.saveForm();
        expect(mockOutputBoundary.loadResponse).toHaveBeenCalledWith(message);
    });

    it('should get form data', async () => {
        const teamId = "9999";
        const leader = "CYCLOP";
        await interactor.getForm(teamId, leader);
        expect(mockGateway.loadShiftForm).toHaveBeenCalledWith(teamId, leader);
    });
});
