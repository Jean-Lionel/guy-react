import { Box } from "@mui/material";
import AnnonceListe from "../components/admin/annonce/AnnonceListe";
import Admin from "./Admin";

const Annonce = () => {
    return (<Admin>
        <Box>
            <AnnonceListe/>
        </Box>
    </Admin>);
}
 
export default Annonce;