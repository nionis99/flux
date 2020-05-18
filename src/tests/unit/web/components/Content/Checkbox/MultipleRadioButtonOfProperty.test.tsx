import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import MultipleRadioButtonOfProperty
    from '../../../../../../web/components/Content/Checkbox/MultipleRadioButtonOfProperty';

const fakeEnums = {
    "Yes": "HELL_YEAH",
    "No": "HELL_NO",
    "Maybe": "MAYBE_YES_MAYBE_NO_MAYBE_SEX_IDK"
}

describe('unit | web | Content | Checkbox | MultipleRadioButtonOfProperty', () => {
    let getByText: any;
    let choice1: HTMLElement;
    let choice2: HTMLElement;
    let choice3: HTMLElement;
    let choices: Array<string>;
    let renderContainer: any;
    let onClick: jest.Mock;
    let primaryValue: string;
    let expectedClass: string;

    beforeEach(() => {
        choices = ['Yes', 'No', 'Maybe'];
        onClick = jest.fn();
    });
    it('renders radio button without crashing', () => {
        const primaryValue = '';
        setup(choices, primaryValue);
        expect(choice1).toBeInTheDocument();
        expect(choice2).toBeInTheDocument();
        expect(choice3).toBeInTheDocument();
    });

    it('set value and make active button', () => {
        primaryValue = 'HELL_NO';
        expectedClass = 'active';
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(choice1.classList).toContain(expectedClass);
        expect(choice2.classList).not.toContain(expectedClass);
        expect(choice3.classList).not.toContain(expectedClass);
    });

    it('unset value and make unactive button', () => {
        primaryValue = "MAYBE_YES_MAYBE_NO_MAYBE_SEX_IDK";
        expectedClass = 'active';
        setup(choices, primaryValue);
        fireEvent.click(choice3);
        expect(choice2.classList).not.toContain(expectedClass);
        expect(choice3.classList).not.toContain(expectedClass);
        expect(choice1.classList).not.toContain(expectedClass);
    });

    function setup(choices: Array<string>, testValue: string) {
        const title = 'Test';
        renderContainer = render(
            <MultipleRadioButtonOfProperty
                title={title}
                choices={choices}
                property='testValue'
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
