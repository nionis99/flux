import {render} from '@testing-library/react';
import React from 'react';
import TopMenu from '../../../../../../web/components/Layout/Menu/TopMenu';
import mock from "jest-mock-extended/lib/Mock";
import {ShiftFormGateway} from "../../../../../../lib/domain/Gateway/ShiftFormGateway";
import {AppBuilder} from "../../../../../../web/App";

const onHomeClick = jest.fn();
const onSaveClick = jest.fn();

it('renders TopMenu without crashing', () => {
    const mockedGateway = mock<ShiftFormGateway>();
    const title = 'Brigadininko forma';
    const {getByText} = render(
        <AppBuilder gateway={mockedGateway}>
            <TopMenu title={title}
                     onHomeClick={onHomeClick}
                     onSaveClick={onSaveClick}
            />
        </AppBuilder>
    );
    expect(getByText(title)).toBeInTheDocument();
});
