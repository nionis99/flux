import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import CheckboxOfProperty from '../../../../../../web/components/Content/Checkbox/CheckboxOfProperty';

const fakeObject: any = {
    value: null
}

describe('integration | web | Content | Checkbox | CheckboxOfProperty', () => {
    let getByText: any;
    let button: HTMLElement;
    let value: boolean | null;

    const onClick = jest.fn((property: string, value: boolean) => {
        fakeObject[property] = value;
    });

    it('check after click and set object value to true', () => {
        value = false;
        setup(value);
        fireEvent.click(button);
        expect(fakeObject.value).toBe(!value);
    });

    it('check after click and set object value to false', () => {
        value = true;
        setup(value);
        fireEvent.click(button);
        expect(fakeObject.value).toBe(!value);
    });


    function setup(value: boolean) {
        const title = 'checkbox';
        const renderContainer = render(
            <CheckboxOfProperty
                title={title}
                property='value'
                value={value}
                onClick={onClick}
            />);
        getByText = renderContainer.getByText;
        button = getByText(title);
    }
});
