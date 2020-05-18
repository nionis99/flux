import {ShiftFormTypes} from '../Entity/ShiftForm/ShiftFormTypes';
import {ShiftFormResponseTypes} from '../Entity/ShiftForm/ShiftFormResponseTypes';
import {AuthorizationTypes} from "../Entity/Authorization/AuthorizationTypes";

export interface ShiftFormGateway {
    checkAuthorization(jwt: string, teamId: string): Promise<AuthorizationTypes>;

    loadShiftForm(teamId: string, leader: string): Promise<ShiftFormTypes>;

    saveShiftForm(shiftForm: ShiftFormTypes): Promise<ShiftFormResponseTypes>;
}
