import Internationalisation from "./internationalisation";


export default class LocalStorageServices {

    onLanguageChanged(language) {
        localStorage.setItem('slctdlngg', new Internationalisation().typeToCode(language));
    }

    getCurrentLanguage() {
        return localStorage.getItem('slctdlngg') ?? 'fr';
    }
}