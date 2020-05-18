import {SetStateAction} from 'react';
import {ShiftFormViewModel} from '../../lib/delivery/ViewModel/ShiftFormViewModel';

export class ShiftFormModel implements ShiftFormViewModel {

    private readonly setResponseMessage: SetStateAction<any>;

    constructor(setResponseMessage: SetStateAction<any>) {
        this.setResponseMessage = setResponseMessage;
    }

    setResponse(message: string): void {
        this.setResponseMessage(message);
    }
}
