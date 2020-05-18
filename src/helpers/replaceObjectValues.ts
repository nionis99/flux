export function replaceObjectValues(shiftForm: any, filledShiftForm: any) {
    Object.keys(filledShiftForm).forEach(function (key) {
        if (checkIfObject(filledShiftForm[key])) {
            Object.keys(filledShiftForm[key]).forEach(function (subKey: string) {
                if (checkIfObject(filledShiftForm[key][subKey])) {
                    Object.keys(filledShiftForm[key][subKey]).forEach(function (lastKey: string) {
                        shiftForm[key][subKey][lastKey] = filledShiftForm[key][subKey][lastKey];
                    });
                } else {
                    shiftForm[key][subKey] = filledShiftForm[key][subKey];
                }
            });
        } else {
            shiftForm[key] = filledShiftForm[key];
        }
    });
    return shiftForm;
}

function checkIfObject(value: any) {
    return typeof value === 'object';
}
