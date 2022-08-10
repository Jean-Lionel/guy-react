import { Box } from "@mui/material";
import { useSelector } from 'react-redux';

const HomeAccueil = () => {

    const { currentLanguage } = useSelector((storeOf) => {
        return { currentLanguage: storeOf.nisys.currentLanguage };
    })


    const titre = {
        title: {
            fr: ' Connaître l’ONPR',
            en: 'Know the ONPR'
        }
    };

    const paragraphes = [

        {
            par: {
                fr: 'L’idée de créer un organisme chargé de gérer les Pensions et les Risques Professionnels des Fonctionnaires, des Magistrats et des Agents de l’Ordre Judiciaire date des années 1960. En 1965, lors de la parution de la Loi du 09 mars 1965 portant les Principes Généraux de la Fonction Publique, les autorités du pays avaient déjà préconisé l’étude d’un système contributif basé sur l’affiliation des magistrats et des fonctionnaires à l’INSS.',
                en: 'The idea is to create an organization responsible for managing the Pensions and Professional Risks of Civil Servants, Magistrates and Agents of the Judicial Order dates back to the 1960s. In 1965, when the Law of March 9, 1965 the General Principles of the Public Service, the authorities of the country had already recommended the study of a contributory system based on the affiliation of magistrates and civil servants to the INSS.'
            },
        },
        {
            par: {
                fr: 'Durant les années 80, les autorités ont tenté de mettre en place le régime des pensions pour les Fonctionnaires et les Magistrats mais il a eu des difficultés d’application dues essentiellement à l’importance de la contribution que l’Etat devait verser à l’INSS pour couvrir les périodes antérieures à la date d’affiliation ainsi que l’appréhension des Fonctionnaires et Magistrats de perdre certains droits acquis.',
                en: 'During the 1980s, the authorities tried to set up the pension scheme for civil servants and magistrates, but there were difficulties in applying it, mainly due to the size of the contribution that the State had to pay to the INSS to cover periods prior to the date of affiliation as well as the apprehension of civil servants and magistrates of losing certain acquired rights.',
            },
        },

        {
            par: {
                fr: 'En 1990, l’idée de la création de ce régime fut reprise par la réforme administrative initiée.',
                en: 'In 1990, the idea of creating this regime was taken up by the administrative reform initiated.',
            },
        },

        {
            par: {
                fr: 'En 1993 la crise qu’a connue le Burundi n’a pas permis de donner suite immédiatement à l’étude qui avait été menée à cet effet. Le Gouvernement du Burundi, avec l’appui de la Banque Mondiale, dans le cadre du projet PAGE (Projet d’Appui à la Gestion Economique) , a entrepris les démarches en vue d’initier une étude de faisabilité pour la mise en place d’un organisme chargé de gérer les branches « pensions et risques professionnels » en faveur des Magistrats et Fonctionnaires. En dates du 7 et 8 avril 2009, le Consultant recruté à cet effet a restitué son rapport au Gouvernement du Burundi lors de l’atelier de restitution et de formation sur la mise en place de l’Office National des Pensions et Risques Professionnels pour les Fonctionnaires, les Magistrats et les Agents de l’Ordre Judiciaire.',
                en: 'In 1993, the crisis experienced by Burundi did not make it possible to follow up immediately on the study which had been carried out for this purpose. The Government of Burundi, with the support of the World Bank, within the framework of the PAGE project (Project to Support Economic Management), has taken steps to initiate a feasibility study for the establishment of a body responsible for managing the “pensions and professional risks” branches for magistrates and civil servants. On April 7 and 8, 2009, the Consultant recruited for this purpose submitted his report to the Government of Burundi during the restitution and training workshop on the establishment of the National Office for Pensions and Occupational Risks for Civil Servants, Magistrates and Judicial Officers.',
            },
        },

        {
            par: {
                fr: 'Le Comité de pilotage ainsi que les participants ont opté pour un démarrage immédiat de l’organisme. C’est cela qui a donné naissance de l’ONPR par le Décret n°100/52 du 31 mars 2010 portant Création, Organisation et Fonctionnement de l’ONPR.',
                en: 'In 1993, the crisis experienced by Burundi did not make it possible to follow up immediately on the study which had been carried out for this purpose. The Government of Burundi, with the support of the World Bank, within the framework of the PAGE project (Project to Support Economic Management), has taken steps to initiate a feasibility study for the establishment of a body responsible for managing the “pensions and professional risks” branches for magistrates and civil servants. On April 7 and 8, 2009, the Consultant recruited for this purpose submitted his report to the Government of Burundi during the restitution and training workshop on the establishment of the National Office for Pensions and Occupational Risks for Civil Servants, Magistrates and Judicial Officers.',
            },
        },

        {
            par: {
                fr: '',
                en: '',
            },
        },

    ]

    return (<Box>
        <h1>  {titre.title[currentLanguage.code]}</h1>

        <main style={{ textAlign: 'justify' }}>
            {paragraphes.map((e) => {
                return (
                    <>
                        <p>{e.par[currentLanguage.code]}</p>

                    </>)
            })}
        </main>

    </Box>);
}

export default HomeAccueil;