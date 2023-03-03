import { Box } from "@mui/material";
import BasePage from "../BasePage";
import ListeCotisationClient from "../components/web/ListeCotisationClient";

const ConsultationCotisation = () => {
    
    return ( 
        <BasePage>
            <Box>
                <h1>Consultation de cotisation pour les affilies</h1>
                <p>
                    Onpr offre une opportunité de visualiser vos cotisation en ligne d'une façon simple
                    et rapide.
                </p>
               
                {/* <button onClick={searchInformation}>Consulter</button> */}
                <Box>
                    <ListeCotisationClient/>
                </Box>
            </Box>
        </BasePage>
     );
}
 
export default ConsultationCotisation;