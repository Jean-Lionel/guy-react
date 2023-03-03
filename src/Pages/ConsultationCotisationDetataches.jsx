import { Box } from "@mui/material";
import BasePage from "../BasePage";
import ListeCotisationClientDetaches from "../components/members/ListeCotisationClientDetaches";

const ConsultationCotisationDetataches = () => {
    
    return ( 
        <BasePage>
            <Box>
                <h1>Consultation de cotisation pour les detaches</h1>
                <p>
                    Onpr offre une opportunite de visualiser vos cotisation en ligne d'une façon simple
                    et rapide.
                </p>
               
                {/* <button onClick={searchInformation}>Consulter</button> */}
                <Box>
                    <ListeCotisationClientDetaches/>
                </Box>
            </Box>
        </BasePage>
     );
}
 
export default ConsultationCotisationDetataches;