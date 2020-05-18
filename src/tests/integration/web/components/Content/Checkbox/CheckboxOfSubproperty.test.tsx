import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import CheckboxOfSubproperty from "../../../../../../web/components/Content/Checkbox/CheckboxOfSubproperty";

const fakeObject: any = {
    value: {
        subvalue: null
    }
}

describe('integration | web | Content | Checkbox | CheckboxOfSubproperty', () => {
    let getByText: any;
    let button: HTMLElement;
    let subvalue: boolean | null;

    const onClick = jest.fn((property: string, subproperty: string, value: boolean) => {
        fakeObject[property][subproperty] = value;
    });

    it('check after click and set object value to true', () => {
        subvalue = false;
        setup(subvalue);
        fireEvent.click(button);
        expect(fakeObject.value.subvalue).toBe(!subvalue);
    });

    it('check after click and set object value to false', () => {
        subvalue = true;
        setup(subvalue);
        fireEvent.click(button);
        expect(fakeObject.value.subvalue).toBe(!subvalue);
    });


    function setup(subvalue: boolean) {
        const title = 'checkbox';
        const renderContainer = render(
            <CheckboxOfSubproperty
                title={title}
                property='value'
                subproperty='subvalue'
                value={subvalue}
                onClick={onClick}
            />);
        getByText = renderContainer.getByText;
        button = getByText(title);
    }
});
