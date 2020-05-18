import {fireEvent, render} from "@testing-library/react";
import React from "react";
import MultipleRadioButtonOfProperty
    from '../../../../../../web/components/Content/Checkbox/MultipleRadioButtonOfProperty';

const fakeEnums: any = {
    "Yes": "HELL_YEAH",
    "No": "HELL_NO",
    "Maybe": "MAYBE_YES_MAYBE_NO_MAYBE_SEX_IDK"
}

const fakeObject: any = {
    value: ""
};

describe('integration | web | Content | Checkbox | MultipleRadioButtonOfProperty', () => {
    let getByText: any;
    let choice1: HTMLElement;
    let choice2: HTMLElement;
    let choice3: HTMLElement;
    let choices: Array<string>;
    let renderContainer: any;
    let onClick: jest.Mock;
    let primaryValue: string;
    let expectedValue: string;

    beforeEach(() => {
        choices = ['Yes', 'No', 'Maybe'];
        onClick = jest.fn((property: string, value: string) => {
            fakeObject[property] = value;
        });
    });

    it('set enum value to object', () => {
        primaryValue = 'HELL_NO';
        expectedValue = 'HELL_YEAH';
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(fakeObject.value).toBe(expectedValue);
    });

    it('unset enum value of object', () => {
        primaryValue = "MAYBE_YES_MAYBE_NO_MAYBE_SEX_IDK";
        expectedValue = '';
        setup(choices, primaryValue);
        fireEvent.click(choice3);
        expect(fakeObject.value).toBe(expectedValue);
    });

    function setup(choices: Array<string>, testValue: string) {
        const title = 'Test';
        renderContainer = render(
            <MultipleRadioButtonOfProperty
                title={title}
                choices={choices}
                property='value'
                enums={fakeEnums}
                value={testValue}
                onClick={onClick}
            />
        );
        getByText = renderContainer.getByText;
        choice1 = getByText(choices[0]);
        choice2 = getByText(choices[1]);
        choice3 = getByText(choices[2]);
    }
});
