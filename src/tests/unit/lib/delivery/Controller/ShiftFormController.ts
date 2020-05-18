import {mock} from 'jest-mock-extended';
import {ShiftFormController} from "../../../../../lib/delivery/Controller/ShiftFormController";
import {ShiftFormInputBoundary} from "../../../../../lib/usecase/Boundary/Input/ShiftFormInputBoundary";

describe('unit | lib | delivery | Controller | ShiftFormController', () => {

    let controller: ShiftFormController;
    let interactor: ShiftFormInputBoundary;

    beforeEach(() => {
        interactor = mock<ShiftFormInputBoundary>();
        controller = new ShiftFormController(interactor);
    });

    it('should call interactor method', () => {
        controller.saveForm();
        expect(interactor.saveForm).toHaveBeenCalled();
    });

    it('should call interactor method', () => {
        const teamId = "9999";
        const leader = "Kašas3000X";
        controller.getForm(teamId, leader);
        expect(interactor.getForm).toHaveBeenCalledWith(teamId, leader);
    });
});
