import { Alert, Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, LinearProgress, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ReactQuill from "react-quill";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import useFetchData from '../../../utility/useFecthData';
import usePostData from "../../../utility/usePostData";
import { useHistory } from "react-router-dom";

const OnLineDecleration = () => {
   
    const {data, isLoading} = useFetchData("get_user_instution");
    const {isLoading: saveLoading, error, submitData} = usePostData();
    const [instution, setInstution] = useState("");
    const [code_instution ,setCode_instution] = useState("");
    const [titre, setTitre] = useState("");
    const [nom_instution ,setNom_instution] = useState("");
    const [mois ,setMois] = useState("");
    const [annee ,setAnnee] = useState("");
    const [date_declaration ,setDate_declaration] = useState(new Date());
    const [description ,setDescription] = useState("");
    const [file_name_1 ,setFile_name_1] = useState("");
    const [file_uploaded_1 ,setFile_uploaded_1] = useState("");
    const [file_name_2 ,setFile_name_2] = useState("");
    const [file_uploaded_2 ,setFile_uploaded_2] = useState("");
    const [institution_id ,setInstitution_id] = useState("");
    const history = useHistory();

    useEffect(() => {
        setMois(date_declaration.getMonth())
        setAnnee(date_declaration.getFullYear())
    }, [date_declaration])
    useEffect(()=> {

        if(data?.data){
            const x = data?.data
          setInstution(x[0])
        }

        if(instution){
            setInstitution_id(instution.id)
            setCode_instution(instution.identify)
            setNom_instution(instution.name)
        }
    
      },[data,instution])

    
    const sendData = (e) => {
        e.preventDefault();
        if (titre && nom_instution  && file_name_1  && date_declaration) {
        const formData = new FormData();
        formData.append("titre", titre);
        formData.append("code_instution", code_instution);
        formData.append("nom_instution", nom_instution);
        formData.append("mois", mois);
        formData.append("annee", annee);
        formData.append("date_declaration", `${annee}-${mois}-${date_declaration.getDate()}`);
        formData.append("description", description);
        formData.append("file_name_1", file_name_1);
        formData.append("file_uploaded_1", file_uploaded_1);
        formData.append("file_name_2", file_name_2);
        formData.append("file_uploaded_2", file_uploaded_2);
        formData.append("institution_id", institution_id);
        submitData("online_declaration_detaches", formData);
        
            history.push("/message-sent")
          
        } else {
            alert("completez tout les champs")
        }      
    }

    return ( <Box sx={{ 

        marginLeft: { md:15, xs: 2 },
        marginRight: { md:15, xs: 2 }
    }}>
        {isLoading && <LinearProgress />}

        
      
         {instution && (
             <Box>
        <Grid container spacing={8}>
          
            <Grid item md={4} sx={{
                textAlign: 'left'
            }}>
                <div>
                    Instution : <b>
                        {instution.name}
                    </b>
                </div>
                <div>
                    Code : <b>  {instution.identify} </b>
                </div>
                <div>
                    Addresse : <b> {instution.address} </b>
                </div>
                <div>
                    TYPE  : 
                    <b>
                        {instution.typeInstution}
                    </b>
                </div>
            </Grid>
            <Grid item md={4}>
                Formulaire de déclaration 
            </Grid>
            <Grid item md={4} sx={{ textAlign: 'right'}}>
                <div>
                    Date Le : <b>{ new Date().toLocaleDateString() }</b>
                </div>
                <div>
                    Téléphone : <b>{ instution.telephone }</b>
                </div>
                <div>
                    Email : <b>{ instution.email }</b>
                </div>
            </Grid>
        </Grid>

        <Grid container spacing={1}>
            <Grid item md={8}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="setTitre">Titre</InputLabel>
                    <Input id="setTitre" 
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                    />
                    <FormHelperText >Mettez un titre</FormHelperText>
                 </FormControl>
            </Grid>
            <Grid item md={4}>
            <FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Choississez la date de déclaration"
                    value={date_declaration}
                    onChange={(newValue) => {
                        setDate_declaration(newValue);
                    }}
                    size="small"
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </FormControl>

            </Grid>
        </Grid>
            

    
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <h6>
                Déscription
            </h6>
            <ReactQuill 
                theme="snow" value={description}
                onChange={setDescription}
                rows={10}
            >
            </ReactQuill>
        </FormControl>
        <Grid container spacing={2}>
            <Grid item md={4}>
            <FormControl  fullWidth sx={{ m: 1 }} variant="standard">
                <TextField value={file_name_1} 
                id="file_name_1" label="Titre du document I" 
                placeholder="ex : Fiche de déclaration ONPR JUIN 2022"
                onChange={e => setFile_name_1(e.target.value)}
                variant="standard" />
            </FormControl>
                <FormControl  fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="file_uploaded_1"> Fichier attaches </InputLabel>
                {
                    file_uploaded_1?.name
                }
                <Button
                    variant="contained"
                    component="label"
                    >
                     <AttachFileIcon /> Chargé le fichier
                    <input
                        type="file"
                        hidden
                        accept=".pdf, xlsx,xls"
                        required

                        onChange={e => setFile_uploaded_1(e.target.files[0])}
                    />
                </Button>
                    <FormHelperText id="file_uploaded_1">NB. Mieux que vos fichiers sois en format pdf et scanné </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item md={4}>
            <FormControl  fullWidth sx={{ m: 1 }} variant="standard">
                <TextField value={file_name_1} 
                id="file_name_1" label="Titre du document II" 
                placeholder="ex : ..."
                onChange={e => setFile_name_2(e.target.value)}
                variant="standard" />
            </FormControl>
                <FormControl  fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="file_uploaded_1"> Fichier attaches </InputLabel>
                {
                    file_uploaded_2?.name
                }
                <Button
                    variant="contained"
                    component="label"
                    >
                     <AttachFileIcon /> Chargé le fichier
                    <input
                        type="file"
                        hidden
                        accept=".pdf"
                        required

                        onChange={e => setFile_uploaded_2(e.target.files[0])}
                    />
                </Button>
                    <FormHelperText id="file_uploaded_1">NB. Mieux que vos fichiers sois en format pdf et scanné </FormHelperText>
                </FormControl>
            </Grid>

            <Grid item md={4}>
               <FormControl fullWidth sx={{ m: 1  }} variant="standard">
               
               <Typography variant="p" className="text-danger">
                  Vérfiez tout les documents avant de les envoyés
               </Typography>
                <Button sx={{marginTop: 5}}
                    id="submit_btn"
                    type="submit"
                    variant="contained"
                    onClick={(e) => sendData(e)}
                    >
                       <SendIcon/> 
                        Envoyer
                    </Button>
               </FormControl>
            </Grid>
        </Grid>
        {saveLoading && <LinearProgress color="success" />}
        {error &&   JSON.stringify(error.message) }
        </Box>
         )}

    </Box> );
}
 
export default OnLineDecleration;