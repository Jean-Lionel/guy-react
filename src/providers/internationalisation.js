export const SupportedLanguages = {
    fr: 'fr',
    en: 'en',
}

export default class Internationalisation {
    currentLanguage = {};

    languages = [
        {
            'code': 'fr',
            'flag': '🇫🇷',
            'fr': 'Français',
            'en': 'French',
        },
        {
            'code': 'en',
            'flag': '🇺🇸',
            'fr': 'Anglais',
            'en': 'English',
        },

    ];

    getLanguageByCode(code) {
        switch (code) {
            case 'fr': return this._french();
            case 'en': return this._english();
            default: return this._french();
        }
    }

    _french() {
        return { 'code': 'fr' };
    }
    _english() {
        return { 'code': 'en' };
    }

    codeToType(code) {
        switch (code) {
            case 'fr':
                return SupportedLanguages.fr;
            case 'en':
                return SupportedLanguages.en;
            default:
                return SupportedLanguages.fr;
        }
    }

    typeToCode(language) {
        switch (language) {
            case SupportedLanguages.fr:
                return 'fr';
            case SupportedLanguages.en:
                return 'en';
            default:
                return 'fr';
        }
    }

    onLanguageChanged(language) {
        switch (language) {
            case SupportedLanguages.fr:
                this.currentLanguage = this._french();
                break;
            case SupportedLanguages.en:
                this.currentLanguage = this._english();
                break;
            default:
                this.currentLanguage = this._french();
                break;
        }
    }
}