import { Box, Grid } from "@mui/material";
import BasePage from "../BasePage";
import declaration_accident_de_travail_model_A2 from "../asset/pdf/declaration_accident_de_travail_model_A2pdf.pdf"
import declaration_accident_de_travail from "../asset/pdf/declaration_accident_de_travail.pdf"
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
import { useEffect, useState } from "react";


const OnlineService = () => {

    const { data, isLoading, refreshSearch } = useFetchDataWithPagination("downloawddoc");
    const [groupeFormulaire, setgroupeFormulaire] = useState(null);

    useEffect(() => {

        if (data?.data) {
            setgroupeFormulaire(data?.data)
        }
        
        return () => {
            
        };
    }, [data]);


    const styleUl = {
        ul: {
            textAlign: "left",

        },
        li: {
            listStyle: "none"
        }
    }
    return ( 
        <BasePage>
            <Box>
            <Grid item
             xs={12} md={12}>
                <ul style={styleUl.ul} className="group-list">
                    <li>
                            <h5>Quelques formulaire de déclaration pour ONPR</h5>
                     </li>
                        <li>
                        
                                {groupeFormulaire && groupeFormulaire.map(formulaire => (
                                    <li>
                                        {formulaire.title}
                                        <ul>
                                        {formulaire.documents && formulaire.documents.map((doc) => (
                                                        <li>
                                                            <a href={doc.name} rel="noreferrer" target="_blank">{doc.title}</a>
                                                        </li>
                                                    ))}
                                      </ul>
                            </li>
                                ))}
                        </li>
                </ul>
        </Grid>
            </Box>
        </BasePage>
    );
}
 
export default OnlineService;