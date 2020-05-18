import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import RadioButtonOfProperty from '../../../../../../web/components/Content/Checkbox/RadioButtonOfProperty';

const fakeObject: any = {
    value: null
}

describe('integration | web | Content | Checkbox | RadioButtonOfProperty', () => {
    let getByText: any;
    let choice1: HTMLElement;
    let choice2: HTMLElement;
    let choices: Array<string>;
    let renderContainer: any;
    let onClick: jest.Mock;
    let expectedValue: null | boolean;
    let primaryValue: null | boolean;

    beforeEach(() => {
        choices = ['Yes', 'No'];
        onClick = jest.fn((property: string, value: null | boolean) => {
            fakeObject[property] = value;
        });
    });

    it('set true value to object', () => {
        primaryValue = null;
        expectedValue = true;
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(fakeObject.value).toBe(expectedValue);
    });

    it('set false value to object', () => {
        primaryValue = null;
        expectedValue = false;
        setup(choices, primaryValue);
        fireEvent.click(choice2);
        expect(fakeObject.value).toBe(expectedValue);
    });

    it('set null value to object', () => {
        primaryValue = false;
        expectedValue = null;
        setup(choices, primaryValue);
        fireEvent.click(choice2);
        expect(fakeObject.value).toBe(expectedValue);
    });

    function setup(choices: Array<string>, value: boolean | null) {
        const title = 'Test';
        renderContainer = render(
            <RadioButtonOfProperty
                title={title}
                choices={['Yes', 'No']}
                property='value'
                value={value}
                onClick={onClick}
            />
        );
        getByText = renderContainer.getByText;
        choice1 = getByText(choices[0]);
        choice2 = getByText(choices[1]);
    }
});
