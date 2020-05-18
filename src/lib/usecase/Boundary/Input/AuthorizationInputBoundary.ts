export interface AuthorizationInputBoundary {
    checkAuthorization(jwt: string, teamId: string): void;

    loadForm(teamId: string, leader: string): void;
}
