import {render} from '@testing-library/react';
import React from 'react';
import Navigation from '../../../../../../web/components/Layout/Menu/Navigation';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Constants from '../../../../../../Constants';

const browserHistory = createBrowserHistory();

describe('unit | web | components | Layout | Menu | Navigation', () => {
    let getByText: any;

    beforeEach(() => {
        const renderContainer = render(
            <Router history={browserHistory}>
                <Navigation/>
            </Router>
        );
        getByText = renderContainer.getByText;
    });
    it('renders Navigation without crashing', () => {
        expect(getByText(Constants.TEAM)).toBeInTheDocument();
        expect(getByText(Constants.CLEANING)).toBeInTheDocument();
        expect(getByText(Constants.MEDICAL_EQUIPMENT)).toBeInTheDocument();
        expect(getByText(Constants.CAR_EQUIPMENT)).toBeInTheDocument();
    });
});




