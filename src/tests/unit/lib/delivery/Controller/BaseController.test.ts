import {mock} from 'jest-mock-extended';
import {BaseController} from '../../../../../lib/delivery/Controller/BaseController';
import {BaseInteractor} from "../../../../../lib/usecase/Interactor/BaseInteractor";

type FakeObjectTypes = {
    property: null | string | boolean,
    objectProperty: {
        subproperty: null | string | boolean
    }
}

const fakeObject: any = {
    property: null,
    objectProperty: {
        subproperty: null
    }
}

describe('unit | lib | delivery | Controller | BaseController', () => {

    let controller: BaseController<FakeObjectTypes>;
    let interactor: BaseInteractor<FakeObjectTypes>;
    let value: boolean | string | null;

    beforeEach(() => {
        interactor = mock<BaseInteractor<FakeObjectTypes>>(fakeObject);
        controller = new BaseController<FakeObjectTypes>(interactor);
    });

    it('should call interactor method with property and value string', () => {
        value = 'test';
        checkProperty(value);
    });

    it('should call interactor method with property and value boolean', () => {
        value = true;
        checkProperty(value);
    });

    it('should call interactor method with property and value null', () => {
        value = null;
        checkProperty(value);
    });

    it('should call interactor method with subproperty and value string', () => {
        value = 'test';
        checkSubproperty(value);
    });

    it('should call interactor method with subproperty and value boolean', () => {
        value = false;
        checkSubproperty(value);
    });

    it('should call interactor method with subproperty and value null', () => {
        value = null;
        checkSubproperty(value);
    });

    function checkProperty(value: null | boolean | string) {
        const property: string = 'property';
        controller.setPropertyValue(property, value);
        expect(interactor.setPropertyValue).toHaveBeenCalledWith(property, value);
    }

    function checkSubproperty(value: null | boolean | string) {
        const property: string = 'property';
        const subproperty: string = 'subproperty';
        controller.setSubpropertyValue(property, subproperty, value);
        expect(interactor.setSubpropertyValue).toHaveBeenCalledWith(property, subproperty, value);
    }
});


