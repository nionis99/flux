import {ShiftFormGateway} from '../../domain/Gateway/ShiftFormGateway';
import {ShiftFormTypes} from '../../domain/Entity/ShiftForm/ShiftFormTypes';
import {ShiftFormResponseTypes} from '../../domain/Entity/ShiftForm/ShiftFormResponseTypes';
import {AuthorizationTypes} from '../../domain/Entity/Authorization/AuthorizationTypes';
import {replaceObjectValues} from "../../../helpers/replaceObjectValues";
import {fakeShiftForm} from "../../domain/Entity/Fake/FakeShiftForm";

const SHIFT_FORM_RESPONSE = {message: "Success"};
const IS_VALID_TRUE = {isValid: true};
const IS_VALID_FALSE = {isValid: false};
const fakeJwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9" +
    ".eyJzdWIiOiJQcm9qZWN0IFgiLCJlSWQiOiJDWUNMT1AiLCJsbiI6IlpWRVIiLCJzdGF0IjoiOTkiLCJzZXJ2IjoiU1RBR0lORyJ9" +
    "._np1P_e9V6mZMpAK_Py9vuW0VTmvmWYuh8FOU8YM7E4wHxqMcZu6VQ7I949-snAxR_g9yp2VTBBCdPh8_Cj29A";

export class FakeShiftFormGateway implements ShiftFormGateway {

    checkAuthorization(jwt: string, teamId: string): Promise<AuthorizationTypes> {
        return new Promise<AuthorizationTypes>((resolve, reject) => {
            if (jwt === fakeJwt && teamId === "1") {
                resolve(IS_VALID_TRUE);
            } else {
                reject(IS_VALID_FALSE);
            }
        });
    }

    loadShiftForm(teamId: string, leader: string): Promise<ShiftFormTypes> {
        const fakeResponseObject = {
            team: {
                id: teamId,
                leader: leader
            }
        }
        return new Promise<ShiftFormTypes>(resolve => {
            if (teamId === "9999" && leader === "Project X") {
                replaceObjectValues(fakeShiftForm, fakeResponseObject);
                resolve();
            }
        });
    }

    saveShiftForm(shiftForm: ShiftFormTypes): Promise<ShiftFormResponseTypes> {
        return new Promise<ShiftFormResponseTypes>(resolve => resolve(SHIFT_FORM_RESPONSE));
    }
}
