import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import React from 'react';
import {AppBuilder} from '../../../../web/App';
import mock from "jest-mock-extended/lib/Mock";
import {ShiftFormGateway} from "../../../../lib/domain/Gateway/ShiftFormGateway";
import Unauthorized from "../../../../web/pages/Unauthorized";

const browserHistory = createBrowserHistory();

it('renders unauthorized page', () => {
    const mockedGateway = mock<ShiftFormGateway>();
    const unauthorizedText = 'Unauthorized';
    const {getByText} = render(
        <AppBuilder gateway={mockedGateway}>
            <Router history={browserHistory}>
                <Unauthorized/>
            </Router>
        </AppBuilder>
    );
    expect(getByText(unauthorizedText)).toBeInTheDocument();
});
