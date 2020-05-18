import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {SingleInput} from "../../../../../../web/components/Content/Input/SingleInput";

const fakeObject: any = {
    value: ""
}

describe('integration | web | Content | Input | SingleInput', () => {
    let getByText: any;
    let input: HTMLInputElement;
    let title: string;
    let primaryValue: string;
    let testText: string;
    let onChange: jest.Mock<void, [string, string]>;

    beforeEach(() => {
        title = 'Test';
        testText = 'Testing testing testing';
        primaryValue = '';
        onChange = jest.fn((property: string, value: string) => {
            fakeObject[property] = value;
        });
        const renderContainer = setup(title, 'value', primaryValue, onChange);
        getByText = renderContainer.getByText;
        input = renderContainer.container.querySelector('input') as HTMLInputElement;
    });

    it('add text as value to object', () => {
        fireEvent.change(input, {target: {value: testText}});
        expect(fakeObject.value).toBe(testText);
    });

    function setup(title: string, property: string, value: string, onChange: jest.Mock) {
        return render(
            <SingleInput
                title={title}
                property={property}
                value={value}
                onChange={onChange}
            />
        );
    }
});
