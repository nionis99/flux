import {render, wait} from '@testing-library/react';
import React from 'react';
import {TestApp} from "../../../web/App";
import Constants from '../../../Constants';

const fakeJwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9" +
    ".eyJzdWIiOiJQcm9qZWN0IFgiLCJlSWQiOiJDWUNMT1AiLCJsbiI6IlpWRVIiLCJzdGF0IjoiOTkiLCJzZXJ2IjoiU1RBR0lORyJ9" +
    "._np1P_e9V6mZMpAK_Py9vuW0VTmvmWYuh8FOU8YM7E4wHxqMcZu6VQ7I949-snAxR_g9yp2VTBBCdPh8_Cj29A";
const teamId = "9999";

describe('acceptance | web | Authorization', () => {

    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: storageMock()
        });
    });

    it('redirect to authorized page', async () => {
        await wait(() => render(<TestApp/>));
        expect(window.location.pathname).toBe(Constants.APP_PAGES.TEAM)
    });

    function storageMock() {
        let storage: any = {user: fakeJwt, teamId: teamId};
        return {
            setItem: function (key: string, value: string) {
                storage[key] = value || '';
            },
            getItem: function (key: string) {
                return storage[key];
            }
        };
    }
});
