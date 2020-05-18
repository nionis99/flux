import {fireEvent, render} from '@testing-library/react';
import React from 'react';
import {SingleInput} from "../../../../../../web/components/Content/Input/SingleInput";

describe('unit | web | Content | Input | SingleInput', () => {
    let getByText: any;
    let input: HTMLInputElement;
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
        input = renderContainer.container.querySelector('input') as HTMLInputElement;
    });
    it('renders input without crashing', () => {
        expect(getByText(title)).toBeInTheDocument();
    });
    it('add text as value', () => {
        fireEvent.change(input, {target: {value: testText}});
        expect(onChange).toHaveBeenCalled();
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
