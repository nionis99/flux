import {render} from '@testing-library/react';
import React from 'react';
import {AppBuilder} from '../../../../../../../web/App';
import {ShiftFormGateway} from '../../../../../../../lib/domain/Gateway/ShiftFormGateway';
import mock from 'jest-mock-extended/lib/Mock';
import {HomeButton} from '../../../../../../../web/components/Layout/Menu/Buttons/HomeButton';

const onHomeClick = jest.fn();

describe('unit | web | components | Layout | Menu | Button | HomeButton', () => {
    let mockedGateway: ShiftFormGateway;
    let container: any;

    beforeEach(() => {
        mockedGateway = mock<ShiftFormGateway>();
        container = render(
            <AppBuilder gateway={mockedGateway}>
                <HomeButton onHomeClick={onHomeClick}/>
            </AppBuilder>
        ).container;
    });

    it('renders home button without crashing', () => {
        expect(container).toBeInTheDocument();
    });
});
