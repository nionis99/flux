export type CleaningFormTypes = {
    generalCleaning: boolean,
    interiorEquipment: cleanedAndDisinfectedTypes,
    medicalEquipment: cleanedAndDisinfectedTypes,
    insideWallCabinets: cleanedAndDisinfectedTypes,
    usedCleaning: usedCleaningTypes
}

type cleanedAndDisinfectedTypes = {
    cleaned: boolean | null,
    disinfected: boolean | null
}

type usedCleaningTypes = {
    bacticid: boolean,
    chemipharm: boolean,
    wipes: boolean
}
