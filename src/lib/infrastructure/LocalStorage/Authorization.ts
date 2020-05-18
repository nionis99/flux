import Constants from "../../../Constants";

class AuthService {
    addUser(jwt: string, teamId: string) {
        localStorage.setItem(Constants.LOCAL_STORAGE_USER, jwt);
        localStorage.setItem(Constants.LOCAL_STORAGE_TEAM_ID, teamId);
    }

    getAuthHeader() {
        const jwt = localStorage.getItem(Constants.LOCAL_STORAGE_USER);
        const authHeader = {'Authorization': `Bearer ${jwt}`};
        return authHeader;
    }

    removeUser() {
        localStorage.removeItem(Constants.LOCAL_STORAGE_USER);
        localStorage.removeItem(Constants.LOCAL_STORAGE_TEAM_ID);
    }
}

export default new AuthService();
