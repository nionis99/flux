import {emptyCleaningForm} from './CleaningForm/EmptyCleaningForm';
import {emptyMedicalEquipmentForm} from './MedicalEquipmentForm/EmptyMedicalEquipmentForm';
import {emptyCarEquipmentForm} from './CarEquipmentForm/EmptyCarEquipmentForm';
import {emptyTeamForm} from './TeamForm/EmptyTeamForm';
import {ShiftFormTypes} from "../ShiftForm/ShiftFormTypes";

export const emptyShiftForm: ShiftFormTypes = {
    datetime: null,
    cleaning: emptyCleaningForm,
    medicalEquipment: emptyMedicalEquipmentForm,
    carEquipment: emptyCarEquipmentForm,
    team: emptyTeamForm
};
