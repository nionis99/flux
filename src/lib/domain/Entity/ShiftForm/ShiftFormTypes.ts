import {CarEquipmentFormTypes} from "../EmptyShiftForm/CarEquipmentForm/CarEquipmentFormTypes";
import {MedicalEquipmentFormTypes} from "../EmptyShiftForm/MedicalEquipmentForm/MedicalEquipmentFormTypes";
import {CleaningFormTypes} from "../EmptyShiftForm/CleaningForm/CleaningFormTypes";
import {TeamFormTypes} from "../EmptyShiftForm/TeamForm/TeamFormTypes";

export type ShiftFormTypes = {
    datetime: string | null,
    cleaning: CleaningFormTypes,
    medicalEquipment: MedicalEquipmentFormTypes,
    carEquipment: CarEquipmentFormTypes,
    team: TeamFormTypes
};
