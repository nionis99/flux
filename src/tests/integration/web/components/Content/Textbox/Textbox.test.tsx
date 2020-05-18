import {Textbox} from '../../../../../../web/components/Content/Textbox/Textbox';
import {fireEvent, render} from '@testing-library/react';
import React from 'react';

const fakeObject: any = {
    value: ""
}

describe('integration | web | Content | Textbox | Textbox', () => {
    let getByText: any;
    let textarea: HTMLTextAreaElement;
    let title: string;
    let testValue: string;
    let testText: string;
    let onChange: jest.Mock<void, [string, string]>;

    beforeEach(() => {
        title = 'Test';
        testText = 'Testing testing testing';
        testValue = '';
        onChange = jest.fn((property: string, value: string) => {
            fakeObject[property] = value;
        });
        const renderContainer = setup(title, 'value', testValue, onChange);
        getByText = renderContainer.getByText;
        textarea = renderContainer.container.querySelector('textarea') as HTMLTextAreaElement;
    });

    it('add text as value', () => {
        fireEvent.change(textarea, {target: {value: testText}});
        expect(fakeObject.value).toBe(testText);
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
