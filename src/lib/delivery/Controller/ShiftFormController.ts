import {ShiftFormInputBoundary} from "../../usecase/Boundary/Input/ShiftFormInputBoundary";

export class ShiftFormController {

    private readonly shiftFormInteractor: ShiftFormInputBoundary;

    constructor(shiftFormInteractor: ShiftFormInputBoundary) {
        this.shiftFormInteractor = shiftFormInteractor;
    }

    async getForm(teamId: string, leader: string) {
        await this.shiftFormInteractor.getForm(teamId, leader);
    }

    async saveForm() {
        await this.shiftFormInteractor.saveForm();
    }

    goHome() {
        this.shiftFormInteractor.goHome();
    }
}
