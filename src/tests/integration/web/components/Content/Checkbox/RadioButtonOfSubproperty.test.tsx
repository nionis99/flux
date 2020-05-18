import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import RadioButtonOfSubproperty from '../../../../../../web/components/Content/Checkbox/RadioButtonOfSubproperty';

const fakeObject: any = {
    value: {
        subvalue: null
    }
}

describe('integration | web | Content | Checkbox | RadioButtonOfSubproperty', () => {
    let getByText: any;
    let choice1: HTMLElement;
    let choice2: HTMLElement;
    let choices: Array<string>;
    let renderContainer: any;
    let onClick: jest.Mock;
    let primaryValue: boolean | null;
    let expectedValue: boolean | null;

    beforeEach(() => {
        choices = ['Yes', 'No'];
        onClick = jest.fn((property: string, subproperty: string, value: boolean | null) => {
            fakeObject[property][subproperty] = value;
        });
    });

    it('set true value to object', () => {
        primaryValue = null;
        expectedValue = true;
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(fakeObject.value.subvalue).toBe(expectedValue);
    });

    it('set false value to object', () => {
        primaryValue = null;
        expectedValue = false;
        setup(choices, primaryValue);
        fireEvent.click(choice2);
        expect(fakeObject.value.subvalue).toBe(expectedValue);
    });

    it('set null value to object', () => {
        primaryValue = true;
        expectedValue = null;
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(fakeObject.value.subvalue).toBe(expectedValue);
    });

    function setup(choices: Array<string>, value: boolean | null) {
        const title = 'Test';
        renderContainer = render(
            <RadioButtonOfSubproperty
                title={title}
                choices={choices}
                property='value'
                subproperty='subvalue'
                value={value}
                onClick={onClick}
            />
        );
        getByText = renderContainer.getByText;
        choice1 = getByText(choices[0]);
        choice2 = getByText(choices[1]);
    }
});
