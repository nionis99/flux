import {mock} from 'jest-mock-extended';
import {ShiftFormOutputBoundary} from "../../../../../lib/usecase/Boundary/Output/ShiftFormOutputBoundary";
import {ShiftFormViewModel} from "../../../../../lib/delivery/ViewModel/ShiftFormViewModel";
import {ShiftFormPresenter} from "../../../../../lib/delivery/Presenter/ShiftFormPresenter";

describe('unit | lib | delivery | Presenter | ShiftFormPresenter', () => {

    let presenter: ShiftFormOutputBoundary;
    let mockViewModel: ShiftFormViewModel;

    beforeEach(() => {
        mockViewModel = mock<ShiftFormViewModel>();
        presenter = new ShiftFormPresenter(mockViewModel);
    });

    it('should fill ViewModel with data', () => {
        const message = "Success";
        presenter.loadResponse(message);
        expect(mockViewModel.setResponse).toHaveBeenCalledWith(message);
    });
});
