import { Box, Grid,Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import usePostData from "../../../utility/usePostData";

const CardDeclaration = (props) => {
    const {declaration,refreshSearch} = props;
  const history = useHistory();
  const { submitData} = usePostData()
    const statusStyle = (status) => {
      switch (status) {
        case 1:
          return "";
        case 0:
          return "rgba(0,255,0,0.2)";
        default:
          return "";
      }
    };

  const deleteDeclaration = (declaration) => {
    const result = window.confirm("êtes-vous sûr ? ")

    if (result) {
      submitData("online_declaration_detaches/" + declaration, {}, "DELETE");
      refreshSearch();
    }
  }
    return ( 
        <Box>
            {declaration && (
             <Grid container spacing={1} sx={{
               backgroundColor: statusStyle(declaration.is_opened),
               '&:hover':{ 
                 cursor: 'pointer',
                 backgroundColor: 'rgba(0,255,0,0.4)',
               }
             }}>
                 <Grid item md={8} sx={{ textAlign : 'left'}}>
                    <div>
                      <h6><i>Titre :</i>  {declaration.titre}</h6>
                    </div>
                      <div>
                    Date de déclaration : <b>{declaration?.date_declaration }</b>
                    </div>
                 </Grid>
                 
                 <Grid item md={4} sx={{ textAlign: 'right'}}>
                      <div>
                     Transmis : <small> <i>{declaration.created_at}</i> </small>
                     </div>
                     <div>
                Envoyé par : 
                  {declaration && declaration?.user &&  <i><u> {declaration?.user?.name}</u>  </i>}
                     </div>
                   <div>
                <Button size="small" sx={{
                         mr: 2
                       }} variant="contained" color="secondary" onClick={() => deleteDeclaration(declaration.id)} >
                            Supprimer
                        </Button>
                       <Button size="small" variant="contained" color="primary" onClick={() => {
                            history.push(`show-detail-declaration/${declaration.id}`)
                        }} >
                           <PreviewIcon size="small" color="primary"/> lire
                        </Button>
                   </div>

                      
                 </Grid>
             </Grid>

            )}
           
        </Box> 
         );
}
 
export default CardDeclaration;