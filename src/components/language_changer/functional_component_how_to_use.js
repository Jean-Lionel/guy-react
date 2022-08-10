import { useSelector } from 'react-redux';

export default function FunctionalComponentHowToUse(props) {

    const { currentLanguage } = useSelector((storeOf) => ({
        currentLanguage: storeOf.nisys.currentLanguage,
    });

    const internationalisation = {
        title: {
            fr: "Assistance et Aide",
            en: "Help and Support",
        },
        message: {
            fr: "Lorem ipsum est malade",
            en: "Lorem ipsum is sick",
        }

    }


    return <div>
        <h1>{internationalisation.title[currentLanguage.code]}</h1>
        <p>{internationalisation.message[currentLanguage.code]}</p>
    </div>
}