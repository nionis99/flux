import {fireEvent, render} from '@testing-library/react';
import Template from '../../../../../web/components/Layout/Template';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import React from 'react';
import {AppBuilder} from '../../../../../web/App';
import mock from "jest-mock-extended/lib/Mock";
import {ShiftFormGateway} from "../../../../../lib/domain/Gateway/ShiftFormGateway";
import Constants from "../../../../../Constants";

const browserHistory = createBrowserHistory();

describe('integration | web | components | Layout | Template', () => {
    let getByText: any;
    let getByTestId: any;
    let button: HTMLElement;
    let content: string;

    beforeEach(() => {
        const mockedGateway = mock<ShiftFormGateway>();
        content = 'Content';
        const renderContainer = render(
            <AppBuilder gateway={mockedGateway}>
                <Router history={browserHistory}>
                    <Template>{content}</Template>
                </Router>
            </AppBuilder>
        );
        getByText = renderContainer.getByText;
        getByTestId = renderContainer.getByTestId;
    });

    it('renders menu with home and save button', () => {
        expectingTextToBeInDocument([Constants.TITLE]);
        expect(getByTestId('save-button')).toBeInTheDocument();
        expect(getByTestId('home-button')).toBeInTheDocument();
    });

    it('renders navigation with tabs', () => {
        expectingTextToBeInDocument([
            Constants.TEAM,
            Constants.CLEANING,
            Constants.MEDICAL_EQUIPMENT,
            Constants.CAR_EQUIPMENT
        ]);
    });

    it('renders footer with text', () => {
        expectingTextToBeInDocument([Constants.FOOTER_VERSION]);
    });

    it('renders content', () => {
        expectingTextToBeInDocument([content]);
    });

    it('redirects after click Komanda', () => {
        button = getByText(Constants.TEAM);
        fireEvent.click(button);
        checkBrowserLocationAndActiveTab(Constants.APP_PAGES.TEAM, button);
    });
    it('redirects after click Valymas', () => {
        button = getByText(Constants.CLEANING);
        fireEvent.click(button);
        checkBrowserLocationAndActiveTab(Constants.APP_PAGES.CLEANING, button);
    });
    it('redirects after click Įranga', () => {
        button = getByText(Constants.MEDICAL_EQUIPMENT);
        fireEvent.click(button);
        checkBrowserLocationAndActiveTab(Constants.APP_PAGES.MEDICAL_EQUIPMENT, button);
    });
    it('redirects after click Automobilis', () => {
        button = getByText(Constants.CAR_EQUIPMENT);
        fireEvent.click(button);
        checkBrowserLocationAndActiveTab(Constants.APP_PAGES.CAR_EQUIPMENT, button);
    });

    function checkBrowserLocationAndActiveTab(expectedUrl: string, button: HTMLElement) {
        expect(browserHistory.location.pathname).toBe(expectedUrl);
        expect(button.parentElement).toHaveClass('active');
    }

    function expectingTextToBeInDocument(value: Array<string>) {
        return value.forEach(x => expect(getByText(x)).toBeInTheDocument());
    }
});
