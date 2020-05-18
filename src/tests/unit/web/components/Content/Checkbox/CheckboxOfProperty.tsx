import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import CheckboxOfProperty from '../../../../../../web/components/Content/Checkbox/CheckboxOfProperty';

describe('unit | web | Content | Checkbox | CheckboxOfProperty', () => {
    let getByText: any;
    let button: HTMLElement;
    let value: boolean;

    const onClick = jest.fn();

    it('renders checkbox without crashing', () => {
        value = false;
        setup(value);
        expect(button).toBeInTheDocument();
    });

    it('check after click', () => {
        value = false;
        setup(value);
        expect(button.parentElement).not.toHaveClass('checked');
        fireEvent.click(button);
        expect(button.parentElement).toHaveClass('checked');
    });

    it('uncheck after click', async () => {
        value = true;
        setup(value);
        expect(button.parentElement).toHaveClass('checked');
        fireEvent.click(button);
        expect(button.parentElement).not.toHaveClass('checked');
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
