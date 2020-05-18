import {render} from '@testing-library/react';
import React from 'react';
import {ShiftFormSaveButton} from "../../../../../../../web/components/Layout/Menu/Buttons/ShiftFormSaveButton";
import {AppBuilder} from '../../../../../../../web/App';
import {ShiftFormGateway} from '../../../../../../../lib/domain/Gateway/ShiftFormGateway';
import mock from 'jest-mock-extended/lib/Mock';

const onSaveClick = jest.fn();

describe('unit | web | components | Layout | Menu | Button | ShiftFormSaveButton', () => {
    let mockedGateway: ShiftFormGateway;
    let container: any;

    beforeEach(() => {
        mockedGateway = mock<ShiftFormGateway>();
        container = render(
            <AppBuilder gateway={mockedGateway}>
                <ShiftFormSaveButton onSaveClick={onSaveClick}/>
            </AppBuilder>
        ).container;
    });

    it('renders save button without crashing', () => {
        expect(container).toBeInTheDocument();
    });
});
