import {AuthorizationOutputBoundary} from "../../usecase/Boundary/Output/AuthorizationOutputBoundary";
import {AuthorizationViewModel} from "../ViewModel/AuthorizationViewModel";

export class AuthorizationPresenter implements AuthorizationOutputBoundary {

    private readonly viewModel: AuthorizationViewModel;

    constructor(viewModel: AuthorizationViewModel) {
        this.viewModel = viewModel;
    }

    loadIsValidated(isValid: boolean): void {
        this.viewModel.setIsValidated(isValid);
    }
}
