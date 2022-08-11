import { Alert, Box, Button, FormControl, Grid, InputLabel, LinearProgress, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import SendIcon from '@mui/icons-material/Send';
import usePostDate from "../../utility/usePostData";

const FormulaireDeclaration = () => {

    let {response, isLoading, error,finished,  submitData} = usePostDate()

    const [nom_instution, setNom_instution] = useState("");
    const [adresse, setAdresse] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [nom_declarant, setNomDeclarant] = useState("");
    const [motif_declaration, setMotif_declaration] = useState("");
    const [date_declaration, setDate_declaration] = useState("");
    const [victime_name, setVictime_name] = useState("");
    const [victime_prenom, setVictime_prenom] = useState("");
    const [type_declaration, setType_declaration] = useState("");
    const [victime_matricule, setVictime_matricule] = useState("");
    const [victime_telephone, setVictime_telephone] = useState("");
    const [victime_fonction, setVictime_fonction] = useState("");
    const [file_name_1, setFile_name_1] = useState("");
    const [file_justification_1, setFile_justification_1] = useState("");
    const [file_name_2, setFile_name_2] = useState("");
    const [file_justification_2, setFile_justification_2] = useState("");
    const [file_name_3, setFile_name_3] = useState("");
  const [file_justification_3, setFile_justification_3] = useState("");
  

    useEffect(() => {
      if (response?.data?.success) {
        setNom_instution("");
        setAdresse("");
        setTelephone("");
        setEmail("");
        setNomDeclarant("");
        setMotif_declaration("");
        setDate_declaration("");
        setVictime_name("");
        setVictime_prenom("");
        setType_declaration("");
        setVictime_matricule("");
        setVictime_telephone("");
        setVictime_fonction("");
        setFile_name_1("");
        setFile_justification_1(null);
        setFile_name_2("");
        setFile_justification_2(null);
        setFile_name_3("");
        setFile_justification_3(null);
        setNomDeclarant("");
        setMotif_declaration("");
        setDate_declaration("");
      }
    }, [response]);
    

    console.log("La valeur est de " + nom_declarant)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('nom_instution', nom_instution)
        data.append('adresse', adresse)
        data.append('telephone', telephone)
        data.append('email', email)
        data.append('nom_declarant', nom_declarant)
        data.append('motif_declaration', motif_declaration)
        data.append('date_declaration', date_declaration)
        data.append('victime_name', victime_name)
        data.append('victime_prenom', victime_prenom)
        data.append('type_declaration', type_declaration)
        data.append('victime_matricule', victime_matricule)
        data.append('victime_telephone', victime_telephone)
        data.append('victime_fonction', victime_fonction)
        data.append('file_name_1', file_name_1)
        data.append('file_justification_1', file_justification_1)
        data.append('file_name_2', file_name_2)
        data.append('file_justification_2', file_justification_2)
        data.append('file_name_3', file_name_3)
       data.append('file_justification_3', file_justification_3)
      
        response = null;
        submitData('declarations', data, "POST"); 
    }
    return ( <Box>
        
        <form onSubmit={handleSubmit} >
        <h1>Formulaire de déclaration</h1>
        
        <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: { md: '45%' , xs:'100%' } },
        marginBottom: '40px'
      }}
      noValidate
      autoComplete="off"

      
    >

        <h5>Information de l'Institution</h5>
       
      <div>
        <TextField
          label="Nom de l'institution"
          id="nom_instution"
          size="small"
          value={nom_instution}
          required
          placeholder="ex: ONPR"
          onChange={(e) => setNom_instution(e.target.value)}
        />
        <TextField
          label="Addresse de l'institution"
          id="adresse"
          value={adresse}
          placeholder="ex : Bujumbura/Mukaza/Rohero"
          size="small"
          required
          onChange={(e) => setAdresse(e.target.value)}
        />  
      </div>
      <div>
        <TextField
          label="Téléphone de l'institution"
          id="telephone"
          value={telephone}
          size="small"
          placeholder="ex: 22 222 222 "
          required
          onChange={(e) => setTelephone(e.target.value)}
          
        />
        <TextField
          label="Email de l'institution'"
          id="email"
          placeholder="ex : exemple@gmail.com"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />  
      </div>
      <div>
        <TextField
          label="Nom du declarant"
          id="nom_declarant"
          size="small"
              required
          value={nom_declarant}
          placeholder="ex: BUCUMI JEAN LEO"
          onChange={(e) => setNomDeclarant(e.target.value)}
        />

        <TextField
            id="date"
            label="Date de déclaration"
            type="date"
            size="small"
              sx={{ width: '100%' }}
              value={date_declaration}
            InputLabelProps={{
                shrink: true,
              }}
            required
            onChange={(e) => setDate_declaration(e.target.value)}

      />
        
      </div>

          <div>
            <label htmlFor="">Description</label>
      <FormControl fullWidth sx={{ m:2, width: '92%' }} variant="standard">
            <ReactQuill 
                theme="snow" value={motif_declaration}
                onChange={ setMotif_declaration}
            >
            </ReactQuill>

            </FormControl>
      </div>
      
      <h5>Information de la victime</h5>
      
      <div>
        <TextField
          label="Nom"
          id="setVictime_name"
              size="small"
          value={victime_name}
          placeholder="ex: Ndongani"
          required
          onChange={(e)=> setVictime_name(e.target.value)}
        />
        <TextField
          label="Prénom"
          id="victime_prenom"
              size="small"
          value={victime_prenom}
          placeholder="ex: Ndongani"
          required
          onChange={(e)=> setVictime_prenom(e.target.value)}
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, minWidth: '45%' }} size="small">
        <InputLabel id="demo-select-small">Type de déclaration</InputLabel>
        <Select
            label="Type de déclaration"
            onChange={(e)=> setType_declaration(e.target.value)}
            >
            <MenuItem value="">
            <em>None</em>
            </MenuItem> <br />
            <MenuItem value="ACCIDENT DE TRAVAIL">ACCIDENT DE TRAVAIL</MenuItem>  <br />
            <MenuItem value="ACCIDENT DE TRAJET">ACCIDENT DE TRAJET</MenuItem>  <br />
            <MenuItem value="MALADIE PROFESSIONNELLES">MALADIE PROFESSIONNELLES</MenuItem>
           
        </Select>
        </FormControl>

        <TextField
          label="Matricule"
          id="victime_matricule"
              size="small"
          value={victime_matricule}
          placeholder=""
          required
          onChange={(e) => setVictime_matricule(e.target.value)}
        />
      </div>

      <div>
      <TextField
          label="Téléphone"
          id="victime_telephone"
              size="small"
          value={victime_telephone}
          placeholder=""
          onChange={(e) => setVictime_telephone(e.target.value)}
        />
      <TextField
          label="Fonction"
          id="victime_fonction"
          size="small"
              placeholder=""
          value={victime_fonction}
          onChange={(e) => setVictime_fonction(e.target.value)}
        />

      </div>
      <h5>
          Documents Justificatifs
      </h5>

      <div>
            <Grid container spacing={2} mr={2} ml={2} mt={1} >
              <Grid item md={5}>
                 
                <input type="text"
                 onChange={(e) => setFile_name_1(e.target.value)}
                  required
                  value={file_name_1}
                  className="form-control form-control-sm"
                  placeholder="Titre de document No I"
                />
              </Grid>

              <Grid item md={5}>
                <input type="file" accept=".pdf"
          
              onChange={(e) => setFile_justification_1(e.target.files[0])}
                  className="form-control form-control-sm"
                  
            />
              </Grid>
            </Grid>   
          </div>
          <div>
            <Grid container spacing={2} mr={2} ml={2} mt={1} >
              <Grid item md={5}>                 
                <input type="text"
                  onChange={(e) => setFile_name_2(e.target.value)}
                  value={file_name_2}
                  className="form-control form-control-sm"
                  placeholder="Titre du document justificatif II"
                />
              </Grid>

              <Grid item md={5}>
              <input type="file" accept=".pdf"
                 onChange={(e) => setFile_justification_2(e.target.files[0])}
                  className="form-control form-control-sm"
                  
            />
              </Grid>
              
            </Grid>   
        
          </div>


          <div>
            <Grid container spacing={2} mr={2} ml={2} mt={1} >
              <Grid item md={5}>
                 
                <input type="text"
                  onChange={(e) => setFile_name_3(e.target.value)}
                  value={file_name_3}
                  className="form-control form-control-sm"
                  placeholder="Titre du document justificatif III"
                />
              </Grid>

              <Grid item md={5}>
              <input type="file" accept=".pdf"
                 onChange={(e) => setFile_justification_3(e.target.files[0])}
                  className="form-control form-control-sm"
                  
            />
              </Grid>
              
            </Grid>   
        
          </div>

      {isLoading && <LinearProgress />}
          {error && <>
            <Alert severity="error">
              <p className="is-invalid" style={{background: "red"}}>
              Vos informations n'ont pas été validées
              </p>
              {/* <p>
                {JSON.stringify(response)}
              </p> */}
            </Alert>
          </>}
   
          {!error && response && response.data.success && 
            <Box sx={{ 
              background: "green",
              width: "90%",
              margin: "auto",
              color: "white",
            }}>
              <div>
                <h5> <Alert severity="success" > </Alert> Votre déclaration a été reçu</h5>
                <p>
                  Vous aurez un message de confirmation quand votre déclaration sera validée
                </p>
            </div>
            </Box>
      
      }
      <div className="mt-4">
          <Button type="submit" size="small" startIcon={(<SendIcon />)}
          sx={{ width: '80%' }}
           variant="contained">
               Envoyer </Button>
      </div>
      
    </Box>
    </form>
    </Box> );
}
 
export default FormulaireDeclaration;