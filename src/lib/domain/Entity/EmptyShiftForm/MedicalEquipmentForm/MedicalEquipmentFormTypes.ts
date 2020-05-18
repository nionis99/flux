export type MedicalEquipmentFormTypes = {
    defibrillator: WorkingAndChargedTypes,
    lucas: WorkingAndChargedTypes,
    ecg: WorkingAndChargedTypes,
    glucometer: WorkingAndChargedTypes,
    cleaner: WorkingAndChargedTypes,
    infusionMachine: WorkingAndChargedTypes,
    infusionHeaterWorking: boolean | null,
    alvDeviceWorking: boolean | null,
    oxygenBottles: OxigenBottlesTypes,
    resuscitationBagFull: boolean | null,
    medicationBagFull: boolean | null,
    portableRadio: WorkingAndChargedTypes,
    tablet: WorkingAndChargedTypes,
    printerWorking: boolean | null,
    consumedMedicalAndOtherMeans: string,
    defects: string
}

type WorkingAndChargedTypes = {
    inWorkingOrder: boolean | null,
    charged: boolean | null
}

type OxigenBottlesTypes = {
    tenLitresBottleFull: boolean | null,
    twoLitresBottleFull: boolean | null
}
