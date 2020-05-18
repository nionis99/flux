import {ShiftFormViewModel} from "../ViewModel/ShiftFormViewModel";
import {ShiftFormOutputBoundary} from "../../usecase/Boundary/Output/ShiftFormOutputBoundary";

export class ShiftFormPresenter implements ShiftFormOutputBoundary {

    private readonly viewModel: ShiftFormViewModel;

    constructor(viewModel: ShiftFormViewModel) {
        this.viewModel = viewModel;
    }

    loadResponse(message: string): void {
        this.viewModel.setResponse(message);
    }
}
