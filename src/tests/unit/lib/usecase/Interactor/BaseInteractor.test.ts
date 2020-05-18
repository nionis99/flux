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

describe('unit | lib | usecase | Interactor | BaseInteractor', () => {

    let interactor: BaseInteractor<FakeObjectTypes>;
    let value: null | string | boolean;

    beforeEach(() => {
        interactor = new BaseInteractor(fakeObject);
    });

    it('should set boolean value to object property', () => {
        value = true;
        checkProperty(value);
    });

    it('should set boolean value to object property', () => {
        value = null;
        checkProperty(value);
    });

    it('should set string value to object property', () => {
        value = 'string';
        checkProperty(value);
    });

    it('should set string value to object subproperty', () => {
        value = 'string';
        checkSubproperty(value);
    });

    it('should set boolean value to object subproperty', () => {
        value = false;
        checkSubproperty(value);
    });

    it('should set null value to object subproperty', () => {
        value = null;
        checkSubproperty(value);
    });

    function checkProperty(value: string | null | boolean) {
        const property: string = 'property';
        interactor.setPropertyValue(property, value);
        expect(fakeObject.property).toEqual(value);
    }

    function checkSubproperty(value: string | null | boolean) {
        const property: string = 'objectProperty';
        const subproperty: string = 'subproperty';
        interactor.setSubpropertyValue(property, subproperty, value);
        expect(fakeObject.objectProperty.subproperty).toEqual(value);
    }
});
