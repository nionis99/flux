import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import CheckboxOfSubproperty from '../../../../../../web/components/Content/Checkbox/CheckboxOfSubproperty';

describe('unit | web | Page | Content | CheckboxOfSubproperty', () => {
    let getByText: any;
    let button: HTMLElement;
    let title: string;
    let value: boolean;

    const onClick = jest.fn();

    it('renders checkbox without crashing', () => {
        value = false;
        setup(value);
        expect(getByText(title)).toBeInTheDocument();
    });
    it('check after click', () => {
        value = false;
        setup(value);
        expect(button.parentElement).not.toHaveClass('checked');
        fireEvent.click(button);
        expect(button.parentElement).toHaveClass('checked');
    });

    it('uncheck after click', () => {
        value = true;
        setup(value);
        expect(button.parentElement).toHaveClass('checked');
        fireEvent.click(button);
        expect(button.parentElement).not.toHaveClass('checked');
    });

    function setup(value: boolean) {
        title = 'checkbox';
        const renderContainer = render(
            <CheckboxOfSubproperty
                title={title}
                property='testObject'
                subproperty='value'
                value={value}
                onClick={onClick}
            />);
        getByText = renderContainer.getByText;
        button = getByText(title);
    }
});
