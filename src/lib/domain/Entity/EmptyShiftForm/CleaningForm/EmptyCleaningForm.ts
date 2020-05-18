import {CleaningFormTypes} from "./CleaningFormTypes";

export const emptyCleaningForm: CleaningFormTypes = {
    generalCleaning: false,
    interiorEquipment: {
        cleaned: null,
        disinfected: null
    },
    insideWallCabinets: {
        cleaned: null,
        disinfected: null
    },
    medicalEquipment: {
        cleaned: null,
        disinfected: null
    },
    usedCleaning: {
        bacticid: false,
        chemipharm: false,
        wipes: false
    }
};
