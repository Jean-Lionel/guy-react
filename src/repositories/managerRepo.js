import Internationalisation from "../providers/internationalisation";
import LocalStorageServices from "../providers/local_storage";


export default class ManagerRepo {
    onLanguageChanged(language) {
        const localStorageServices = new LocalStorageServices();
        const internationalisation = new Internationalisation();
        localStorageServices.onLanguageChanged(language);
        internationalisation.onLanguageChanged(language);
        return internationalisation.currentLanguage;
    }
}