import React, {Fragment, useContext, useState} from 'react';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Constants from '../../../Constants';
import {appContext} from "../../App";
import {ShiftFormModel} from "../../models/ShiftFormModel";
import FormResponse from "../Content/FormResponse/FormResponse";

interface Props {
    children: React.ReactNode;
}

export default function Template(props: Props) {
    const [responseMessage, setResponseMessage] = useState<string>();
    const [showResponse, setShowResponse] = useState<boolean>(false);
    const {builder} = useContext(appContext);
    const controller = builder.createShiftFormController(new ShiftFormModel(setResponseMessage));

    async function onSave(event: MouseEvent) {
        event.preventDefault();
        await controller.saveForm();
        setTimeoutOfResponseMessage();
    }

    function onHomeClick(event: MouseEvent) {
        event.preventDefault();
        controller.goHome();
    }

    function setTimeoutOfResponseMessage() {
        setShowResponse(true);
        const timer = setTimeout(() => {
            setShowResponse(false);
            clearTimeout(timer);
        }, Constants.RESPONSE_MESSAGE_SHOW_TIME);
    }

    return (
        <Fragment>
            <Menu onSaveClick={onSave}
                  onHomeClick={onHomeClick}
            />
            <div className='scrollable-content'>
                {props.children}
                <Footer version={Constants.FOOTER_VERSION}/>
            </div>
            <FormResponse showMessage={showResponse} message={responseMessage}/>
        </Fragment>
    );
}
