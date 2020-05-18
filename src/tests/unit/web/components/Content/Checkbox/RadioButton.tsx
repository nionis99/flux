import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import RadioButton from '../../../../../../web/components/Content/Checkbox/RadioButton';

describe('unit | web | Content | Checkbox | RadioButton', () => {
    let getByText: any;
    let button: HTMLElement;
    let onClick: jest.Mock;
    let title: string;

    beforeEach(() => {
        title = 'Title';
        const selected = 'Yes';
        onClick = jest.fn((e: MouseEvent) => () => e.preventDefault());
        const renderContainer = render(
            <RadioButton
                title={title}
                choices={['Yes', 'No']}
                onClick={onClick}
                selected={selected}
            />);
        getByText = renderContainer.getByText;
    });
    it('renders radio button without crashing', () => {
        button = getByText(title);
        expect(button).toBeInTheDocument();
    });

    it('should call onClick after click', () => {
        button = getByText('Yes');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    });
});
