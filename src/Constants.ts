const EPCR_HOST = process.env.REACT_APP_TARGET === 'development'
    ? 'http://dev.epcr.z1.lt'
    : 'https://epcr.033.lt';

const FLUX_HOST = process.env.REACT_APP_TARGET === 'development'
    ? 'http://flux_api.z1.lt'
    : 'https://flux.033.lt';

class Constants {
    public static readonly FOOTER_VERSION = `© OpenG™ • v${process.env.REACT_APP_VERSION}`;
    public static readonly EPCR_HOME_URL = `${EPCR_HOST}/list/active-pcrs`;
    public static readonly APP_PAGES = {
        AUTHORIZATION: '/',
        UNAUTHORIZED: '/unauthorized',
        TEAM: '/team',
        CLEANING: '/cleaning',
        CAR_EQUIPMENT: '/car-equipment',
        MEDICAL_EQUIPMENT: '/medical-equipment'
    };
    public static readonly API_URL = `${FLUX_HOST}/api`;
    public static readonly API_VERSION = '/v1/'
    public static readonly API_AUTH_URL = Constants.API_URL + Constants.API_VERSION + 'auth';
    public static readonly API_SHIFT_JOURNAL_URL = Constants.API_URL + Constants.API_VERSION + 'shift-journal';
    public static readonly LOCAL_STORAGE_USER = 'user';
    public static readonly LOCAL_STORAGE_TEAM_ID = 'teamId';
    public static readonly LOADING = 'Kraunama...';
    public static readonly TITLE = 'Komandos perdavimo žurnalas';
    public static readonly TEAM = 'Komanda';
    public static readonly CLEANING = 'Valymas';
    public static readonly MEDICAL_EQUIPMENT = 'Įranga';
    public static readonly CAR_EQUIPMENT = 'Automobilis';
    public static readonly TEAM_ID = 'Komandos id';
    public static readonly LEADER = 'Vadovas';
    public static readonly DRIVER = 'Vairuotojas';
    public static readonly WORKING = 'Veikia';
    public static readonly NOT_WORKING = 'Neveikia';
    public static readonly MASCULINE_CHARGED = 'Įkrautas';
    public static readonly FEMININE_CHARGED = 'Įkrauta';
    public static readonly MASCULINE_DISCHARGED = 'Išsikrovęs';
    public static readonly FEMININE_DISCHARGED = 'Išsikrovus';
    public static readonly FULL = 'Pilnas';
    public static readonly NEED_TO_BE_FILLED = 'Reikia papildyti';
    public static readonly EMPTY = 'Tuščias';
    public static readonly MASCULINE_SUITABLE = 'Tinkamas';
    public static readonly MASCULINE_UNSUITABLE = 'Netinkamas';
    public static readonly FEMININE_SUITABLE = 'Tinkama';
    public static readonly FEMININE_UNSUITABLE = 'Netinkama';
    public static readonly LESS_THAN_ONE_MONTH = '<1 mėn.';
    public static readonly CLEANED = 'Išvalyta';
    public static readonly NOT_CLEANED = 'Neišvalyta';
    public static readonly DISINFECTED = 'Dezinfekuota';
    public static readonly NOT_DISINFECTED = 'Nedezinfekuota';
    public static readonly RESPONSE_MESSAGE_SHOW_TIME = 2500;
    public static readonly MESSAGE_OF_SUCCESS = 'Žurnalo duomenys sėkmingai išsaugoti!';
    public static readonly MESSAGE_OF_FAILURE = "Nepavyko išsaugoti duomenų";
    public static readonly TECHNICAL_INSPECTION_ENUMS = {
        'Tinkama': 'VALID',
        '<1 mėn.': 'LESS_THAN_ONE_MONTH_LEFT',
        'Netinkama': 'INVALID'
    };
}

export default Constants;
