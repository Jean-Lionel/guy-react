import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import {useParams} from "react-router-dom";
import useFetchData from "../../../utility/useFecthData";


const DetailDeclarationComponent = () => {
    let { id } = useParams();
    const {data, isLoading, error } = useFetchData("online_declaration_detaches/"+id)
    const [declaration, setDeclaration] = useState(null);
    const [userName , setUserName] = useState(null);

    useEffect(() => {
        if(data){
            setDeclaration(data?.data.declaration)
            setUserName(data?.data?.user)
        }
        return () => {
            setDeclaration(null)
        };
    }, [data]);

    return ( <Box sx={{
        marginRight: {md: "40px", lg: "80px", sx: "5px"},
        marginLeft: {md: "40px", lg: "80px", sx: "5px"},
    }}>
        {isLoading && <LinearProgress color="success" />}
        {error && <Alert >
                {JSON.stringify(error)}
            </Alert>}
       {declaration && <Box>
           
           <Grid container spacing={2}>
               <Grid item md={8} sx={{ textAlign: 'left'}}>
               <h6>Tire de la déclaration : <b>{declaration.titre}</b></h6>
               <h6>Code de l'institution : <b>{declaration.code_instution}</b></h6>
               <h6> Déclaration du : <b>{declaration.mois} / {declaration.annee}</b></h6>
               </Grid>
                <Grid item md={4} sx={{ textAlign: 'right'}}>
                    <div>
                    Date de déclaration : <b>{declaration?.date_declaration}</b> 
                    </div>
                    <div>
                        Transmis : <small> <i>{declaration?.created_at?.split("T")[0]}</i> </small> <br />
                        Envoyé par : <small><b>{declaration  &&  <i><u> {userName?.name}</u>  </i>}</b></small>
                    </div>
                </Grid>
                <Grid item md={8}>
                    <ReactQuill
                value={declaration.description}
                readOnly= {true}
                modules = {{
                    toolbar : false,

                    }}
                    theme = "snow"
                />

                </Grid>
               
               <Grid item md={4} sx={{ textAlign: 'right'}}>
                   <h6>Les documents attachés</h6>
                   <div> 
                       { declaration.file_uploaded_one && (
                           <a href={declaration.file_uploaded_one} rel="noreferrer" target="_blank">
                               {declaration.file_name_one}
                           </a>
                       ) }
                   </div>
                   <div> 
                       { declaration.file_uploaded_two && (
                           <a href={declaration.file_uploaded_two} rel="noreferrer" target="_blank">
                               {declaration.file_name_two}
                           </a>
                       ) }
                   </div>
               </Grid>

           </Grid>
           
           

             

           
        </Box>}
    </Box> );
}
 
export default DetailDeclarationComponent;