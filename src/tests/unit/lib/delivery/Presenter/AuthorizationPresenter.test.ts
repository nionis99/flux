import {mock} from 'jest-mock-extended';
import {AuthorizationOutputBoundary} from "../../../../../lib/usecase/Boundary/Output/AuthorizationOutputBoundary";
import {AuthorizationViewModel} from "../../../../../lib/delivery/ViewModel/AuthorizationViewModel";
import {AuthorizationPresenter} from "../../../../../lib/delivery/Presenter/AuthorizationPresenter";

describe('unit | lib | delivery | Presenter | AuthorizationPresenter', () => {

    let presenter: AuthorizationOutputBoundary;
    let mockViewModel: AuthorizationViewModel;

    beforeEach(() => {
        mockViewModel = mock<AuthorizationViewModel>();
        presenter = new AuthorizationPresenter(mockViewModel);
    });

    it('should fill ViewModel with data', () => {
        const isValid: boolean = false;
        presenter.loadIsValidated(isValid);
        expect(mockViewModel.setIsValidated).toHaveBeenCalledWith(isValid);
    });
});
