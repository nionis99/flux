import {SetStateAction} from 'react';
import {AuthorizationViewModel} from "../../lib/delivery/ViewModel/AuthorizationViewModel";

export class AuthorizationModel implements AuthorizationViewModel {

    private readonly setIsValid: SetStateAction<any>;

    constructor(setIsValid: SetStateAction<any>) {
        this.setIsValid = setIsValid;
    }

    setIsValidated(isValid: boolean): void {
        this.setIsValid(isValid);
    }
}
