export interface ShiftFormInputBoundary {
    saveForm(): void;

    getForm(teamId: string, leader: string): void;

    goHome(): void;
}
