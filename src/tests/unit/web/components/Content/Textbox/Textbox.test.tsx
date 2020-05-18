import {Textbox} from '../../../../../../web/components/Content/Textbox/Textbox';
import {fireEvent, render} from '@testing-library/react';
import React from 'react';

describe('unit | web | Content | Textbox | Textbox', () => {
    let getByText: any;
    let textarea: HTMLTextAreaElement;
    let title: string;
    let testValue: string;
    let testText: string;
    let onChange: jest.Mock<string>;

    beforeEach(() => {
        title = 'Test';
        testText = 'Testing testing testing';
        testValue = '';
        onChange = jest.fn();
        const renderContainer = setup(title, 'testValue', testValue, onChange);
        getByText = renderContainer.getByText;
        textarea = renderContainer.container.querySelector('textarea') as HTMLTextAreaElement;
    });
    it('renders Textbox without crashing', () => {
        expect(getByText(title)).toBeInTheDocument();
    });
    it('add text as value', () => {
        fireEvent.change(textarea, {target: {value: testText}});
        expect(onChange).toHaveBeenCalled();
    });

    function setup(title: string, property: string, value: string, onChange: jest.Mock) {
        return render(
            <Textbox
                title={title}
                property={property}
                value={value}
                onChange={onChange}
            />
        );
    }
});
