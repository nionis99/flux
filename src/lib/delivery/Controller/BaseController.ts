import {BaseInteractor} from "../../usecase/Interactor/BaseInteractor";

export class BaseController<E> {

    private readonly interactor: BaseInteractor<E>;

    constructor(interactor: BaseInteractor<E>) {
        this.interactor = interactor;
    }

    setPropertyValue<T>(property: string, value: T): void {
        this.interactor.setPropertyValue(property, value);
    }

    setSubpropertyValue<T>(property: string, subproperty: string, value: T): void {
        this.interactor.setSubpropertyValue(property, subproperty, value);
    }
}

