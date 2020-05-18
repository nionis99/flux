import React from 'react';
import {render} from "@testing-library/react";
import FormResponse from "../../../../../../web/components/Content/FormResponse/FormResponse";

describe('unit | web | Content | FormResponse | FormResponse', () => {
    let renderContainer: any;
    let getByText: any;

    it('render and show container with message', () => {
        const isVisible = true;
        const message = "response message";
        setup(isVisible, message);
        expect(getByText(message)).toBeInTheDocument();
    });

    it('render and hide container', () => {
        const isVisible = false;
        const message = "no response";
        setup(isVisible, message);
        expect(renderContainer.container.innerHTML).toContain("hide");
    });

    function setup(isVisible: boolean, message: string) {
        renderContainer = render(
            <FormResponse showMessage={isVisible} message={message}/>
        )
        getByText = renderContainer.getByText;
    }
});
