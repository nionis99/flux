export type CarEquipmentFormTypes = {
    navigationWorking: boolean | null,
    radioWorking: boolean | null,
    computerWorking: boolean | null,
    stretchersWorking: boolean | null,
    lightAndSoundSignalsWorking: boolean | null,
    engineOilLevelAppropriate: boolean | null,
    heatingCoolingSystemWorking: boolean | null,
    brakeSystemWorking: boolean | null,
    suspensionConditionGood: boolean | null,
    tireConditionGood: boolean | null,
    technicalInspectionValidity: string,
    minorDefects: string,
    criticalDefects: string
}
