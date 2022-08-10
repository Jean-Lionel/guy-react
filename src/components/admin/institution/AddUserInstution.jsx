import { Box, Grid } from "@mui/material";
import FormAddInstution from './FormAddInstution'
import AllowedUserInstution from './AllowedUserInstution'

const AddUserInstution = () => {
    return ( 
        <Box>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <FormAddInstution/>
                </Grid>
                <Grid item md={6}>
                    <AllowedUserInstution/>
                </Grid>
            </Grid>
        </Box>
     );
}
 
export default AddUserInstution;