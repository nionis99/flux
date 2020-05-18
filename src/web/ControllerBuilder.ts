import {RestShiftFormGateway} from '../lib/infrastructure/Rest/RestShiftFormGateway';
import {ShiftFormModel} from "./models/ShiftFormModel";
import {ShiftFormPresenter} from "../lib/delivery/Presenter/ShiftFormPresenter";
import {ShiftFormController} from "../lib/delivery/Controller/ShiftFormController";
import {BaseInteractor} from "../lib/usecase/Interactor/BaseInteractor";
import {BaseController} from '../lib/delivery/Controller/BaseController';
import {ShiftFormInteractor} from '../lib/usecase/Interactor/ShiftFormInteractor';
import {AuthorizationController} from "../lib/delivery/Controller/AuthorizationController";
import {AuthorizationInteractor} from "../lib/usecase/Interactor/AuthorizationInteractor";
import {AuthorizationModel} from "./models/AuthorizationModel";
import {AuthorizationPresenter} from "../lib/delivery/Presenter/AuthorizationPresenter";

class ControllerBuilder {

    private readonly gateway: RestShiftFormGateway;

    constructor(gateway: RestShiftFormGateway) {
        this.gateway = gateway;
    }

    createAuthorizationController(model: AuthorizationModel) {
        const presenter = new AuthorizationPresenter(model);
        return new AuthorizationController(new AuthorizationInteractor(this.gateway, presenter));
    }

    createBaseController<E>(form: E) {
        return new BaseController<E>(new BaseInteractor<E>(form));
    }

    createShiftFormController(model: ShiftFormModel) {
        const pressenter = new ShiftFormPresenter(model);
        return new ShiftFormController(new ShiftFormInteractor(this.gateway, pressenter));
    }
}

export default ControllerBuilder;

