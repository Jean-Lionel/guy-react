import { Box , Input,Alert,  Button, Grid, AlertTitle, LinearProgress} from "@mui/material";
import useReadExcel from "../../../utility/useReadExcel";
import {useEffect, useMemo, useState} from "react"
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostDate from "../../../utility/usePostData";
import { useHistory } from "react-router-dom";
import cotisation_model from "../../../asset/pdf/cotisation.xlsx"
const AddCotisationAfilier = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const {data : institutions } = useFetchDataWithPagination("/institutions/groupby/AFFILIERS");
    const {response, isLoading, error, finished,submitData} = usePostDate();

    const loadInstitutions =  useMemo(()=> institutions?.data ?? [], [institutions])
    const history = useHistory();

    useEffect(() => {
     

    }, [loadInstitutions])

    useEffect(() => {
       
        if(finished) {
            history.push("/cotisations");
        }
        return () => {
            
        };
    }, [finished,history]);

    const {data,  dataTable, handleFileUpload}  = useReadExcel();
   
    const saveData = (e) => {
        e.preventDefault();
        // console.log(data);
        const postData = new FormData()
        postData.append('data', JSON.stringify(data));
        postData.append('institution_id', 1);  // name of the file
        
        if (data.length > 0) {
            submitData("cotisations", postData); 
        } else {
            setErrorMessage("Veuillez charger un fichier excel");
        }
        
        
    }
    return ( 
        <Box>
            {errorMessage && (
                <Alert severity="error"> {errorMessage}</Alert>
            )}
        
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
        <form onSubmit={saveData }>
                        <h5>Chargement des données afiliers</h5>
                        
                        {response && (
                            <Alert severity="success">
                                Vos données ont été bien sauvegarder
                            </Alert>
            )}
            {
                error && (
                    <Alert severity="error">
                        <AlertTitle>Erreur</AlertTitle>
                        <p>
                            une erreur est survenue lors de l'enregistrement des données. Verfiez vos données et Réessayez encore !!!
                        </p>
                    </Alert>
                )
            }

            {isLoading && (
                 <LinearProgress color="success"/>
            )}

            <Grid container spacing={2}>
            
                            <div>{data?.length}</div>
                            <Grid item md={3} sx={{ m: 2 }}>
                                
                <Input required type="file"  label="Chargement du fichier excel"  accept="csv,xlsx,xls"   onChange={handleFileUpload}/>
                </Grid>
                <Grid  md={2} item sx={{m: 2}}>
                <Button type="submit" variant="contained" onClick={saveData} >Enregistrer</Button>
                            </Grid>
                            
                <Grid item md={2}>
                                <h6>
                                    <a href={ cotisation_model} download="modele_de_cotisation">Télécharger le modèle</a>
                                </h6>         
                </Grid>

            </Grid>
        </form>
        </div>
        </Box>
        <div>
        { dataTable()}
        </div>
        </Box>
        );
    }
    
    export default AddCotisationAfilier;