import {render} from "@testing-library/react";
import {TestApp} from "../../../web/App";
import React from "react";

describe('acceptance | web | Authorization', () => {
    let getByText: any;

    beforeEach(() => {
        const renderContainer = render(<TestApp/>);
        getByText = renderContainer.getByText;
    });

    it('redirect to authorized page', async () => {
        const unauthorized = "Unauthorized"
        expect(getByText(unauthorized)).toBeInTheDocument();
    });
});
