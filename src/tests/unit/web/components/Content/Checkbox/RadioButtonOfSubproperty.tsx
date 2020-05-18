import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import RadioButtonOfSubproperty from '../../../../../../web/components/Content/Checkbox/RadioButtonOfSubproperty';

describe('unit | web | Content | Checkbox | RadioButtonOfSubproperty', () => {
    let getByText: any;
    let choice1: HTMLElement;
    let choice2: HTMLElement;
    let choices: Array<string>;
    let renderContainer: any;
    let onClick: jest.Mock;

    beforeEach(() => {
        choices = ['Yes', 'No'];
        onClick = jest.fn();
    });
    it('renders radio button without crashing', () => {
        const primaryValue = false;
        setup(choices, primaryValue);
        expect(choice1).toBeInTheDocument();
        expect(choice2).toBeInTheDocument();
    });
    it('set true value and make active button', () => {
        const primaryValue = null;
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(choice1.classList).toContain('active');
        expect(choice2.classList).not.toContain('active');
    });

    it('set false value and make active button', () => {
        const primaryValue = null;
        setup(choices, primaryValue);
        fireEvent.click(choice2);
        expect(choice1.classList).not.toContain('active');
        expect(choice2.classList).toContain('active');
    });

    it('unset value and make unactive button ', () => {
        const primaryValue = true;
        setup(choices, primaryValue);
        fireEvent.click(choice1);
        expect(choice1.classList).not.toContain('active');
        expect(choice2.classList).not.toContain('active');
    });

    function setup(choices: Array<string>, value: boolean | null) {
        const title = 'Test';
        renderContainer = render(
            <RadioButtonOfSubproperty
                title={title}
                choices={choices}
                property='testObject'
                subproperty='testValue'
                value={value}
                onClick={onClick}
            />
        );
        getByText = renderContainer.getByText;
        choice1 = getByText(choices[0]);
        choice2 = getByText(choices[1]);
    }
});
