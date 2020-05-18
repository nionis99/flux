import React from 'react';
import {Dimmer, Loader} from "semantic-ui-react";
import Constants from '../../../../Constants';

export default function Loading() {
    return (
        <Dimmer active>
            <Loader size='small'>
                {Constants.LOADING}
            </Loader>
        </Dimmer>
    );
}
