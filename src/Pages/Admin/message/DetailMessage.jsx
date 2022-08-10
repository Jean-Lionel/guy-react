import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import {useParams} from "react-router-dom";
import useFetchData from "../../../utility/useFecthData";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const DetailMessage = () => {
    let { id } = useParams();

    const {data, isLoading, error} = useFetchData(`declarations/${id}`);
    const message = data?.data

    return ( <Box sx={{ 
        marginRight: "40px",
        marginLeft: "40px",
    }}>
       
        {isLoading && <LinearProgress  color="success" />}
        {error && <p>Error: {JSON.stringify(error)}</p>}
        {/* nom_instution
        
        date_declaration */}
        {message && (
            <Box>
              <Grid container spacing={2} >
                  <Grid item md={12}>
                    <h6>
                        Information de l'instution
                    </h6>
                  </Grid>
                  <Grid item md={6} sx={{ textAlign: 'left'}}>
                      <h6>Institution : {message.nom_declarant}</h6>
                      <h6>Addresse : {message.adresse}</h6>
                      <h6>Nom du déclarant : {message.nom_declarant}</h6>
                  </Grid>
                  <Grid item md={6} sx={{ textAlign: 'right'}}>
                      <h6>
                          Date de déclaration : { message.date_declaration}
                      </h6>
                      <h6>
                          Téléphone : { message.date_declaration}
                      </h6>
                      <h6>
                         
                          <a href={"mailto:"+  message.email } >
                          Email : { message.email}
                              <AttachEmailIcon />
                          </a>
                      </h6>
                      
                  </Grid>
                    <Grid item md={12} sx={{ textAlign: 'right'}}>
                      
                        <Typography sx={{ textAlign: 'center' }} variant="h6" gutterBottom>
                                Information de la victime
                            </Typography>
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: 'left'}}>
                        
                                <h6>Nom et Prénom : {message.victime_name} {message.victime_prenom}</h6>
    
                                <h6>Type de déclaration : {message.type_declaration}</h6>
                                <h6>Profession : {message.profession_victime}</h6>
                       
                    </Grid>
                    <Grid item md={6} sx={{ textAlign: 'right'}}>
                            <h6>Matricule : {message.victime_matricule}</h6>
                            <h6>Fonction : {message.date_naissance_victime}</h6>
                            <h6>Téléphone : {message.victime_telephone}</h6>
                            <small>
                                <i>Envoyé le { new Date(message.created_at).toLocaleDateString() }</i>
                            </small>
                    </Grid>
                      
               
                  <Grid item md={12}>
                      <ReactQuill 
                      value={message.motif_declaration}
                      modules = {{
                          toolbar : false,

                      }}

                      readOnly = {true}
                      theme = "snow"
                      >

                      </ReactQuill>

                  </Grid>

                  <Grid item md={12}>
                      <h6>Les documents justificatifs</h6>
                  </Grid>
                  <Grid item md={12} sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                  }}>
                        <p>
                            <a href={message.file_justification_1} rel="noreferrer" target="_blank">
                                <AttachFileIcon/>
                            { message.file_name_1   }
                            </a>
                        </p>
                        { message.file_name_2 && (
                            <p>
                                <a href={message.file_justification_2} rel="noreferrer" target="_blank">
                                <AttachFileIcon/>
                            { message.file_name_2   }
                            </a>
                            </p>
                        )}
                        { message.file_name_3 && (
                            <p>
                                <a href={message.file_justification_3} rel="noreferrer" target="_blank">
                                <AttachFileIcon/>
                            { message.file_name_3   }
                            </a>
                            </p>
                        )}
                  </Grid>

              </Grid>
          
          </Box>


        )}
      
      
      
      
      
      

      
      
      
      


    </Box> );
}
 
export default DetailMessage;