import React from 'react';
import Constants from "../../../../Constants";
import {Icon} from 'semantic-ui-react';

interface Props {
    message?: string;
    showMessage: boolean;
}

function FormResponse(props: Props) {
    const {message, showMessage} = props;

    function checkResponse() {
        return (message && message === Constants.MESSAGE_OF_SUCCESS) ? 'green' : 'red';
    }

    return (
        <div className={`responseMessage ${checkResponse()} 
             ${showMessage ? 'show' : 'hide'}`}>
            <p>
                {message === Constants.MESSAGE_OF_SUCCESS
                    ? <Icon name='checkmark' size='big'/>
                    : <Icon link name='close' size='big'/>
                }
                <span>{message}</span>
            </p>
        </div>
    );
}

export default FormResponse;
