
import { Alert, Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import useGetConnectedUser from "../utility/useGetConnectedUser";
import usePostData from "../utility/usePostData";
import Admin from "./Admin";


const Profile = () => {
    const { userConnected } = useGetConnectedUser()
    const { submitData } = usePostData();

    const [old_password, setOld_password] = useState("")
    const [password, setPassword] = useState("")
    const [c_password, setC_password] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const user = userConnected.user

    const changePassword = () => {
     setErrorMessage("")
        if (password !== c_password) {
            setErrorMessage('Les deux Mots de passe sont différent');
        } else {
            submitData("change_password", {
                old_password,
                password
            });
        }

        
    }

    return (<Admin>
        <Box sx={{
            textAlign: 'left',
            margin: '0px 60px',
           
        }}>
            <h1>Information</h1>
        <div className="card p-2">
        <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-between">
                            <h5>Nom Prénom</h5>
                        <h4>{user?.user?.name}</h4>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h5>Téléphone</h5>
                        <h4>{user?.user?.telephone}</h4>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                             <h5>Matricule</h5>
                        <h4>{user?.user?.numero_matricule}</h4>
                        </div>

        </div>
        <div className=" offset-md-2 col-md-4">
                        <h4>Change votre mot de passe</h4>
   
         <TextField
                label="Ancien Mot de passe"
                id="old_password"
                            size="small"
                             type="password"
                            value={old_password}
                            className="form-control"
                            onChange={(e) => setOld_password(e.target.value)}
                required
                        />
                        <br />    
                        <br />    
                       
                         
         <TextField
                label="Nouveau Mot de passe"
                id="new_password"
                size="small"
                            value={password}
                      type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control"
                        />   
          <br />    
                        <br />              
                                     
         <TextField
                label="Confirme votre Mot de passe"
                id="c_password"
                            size="small"
                            value={c_password}
                          type="password"
                            onChange={(e) => setC_password(e.target.value)}
                            required
                            className="form-control"
                        />  
              
                        <br /> 
                        <br /> 

                        {errorMessage &&
                            <Alert severity="error">{ errorMessage}</Alert>
                        }
                        

                        <Button
                            onClick={changePassword}
                        
                            className="form-control" variant="contained">Change</Button>              
            
        </div>
        
        </div>
        </div>
        </Box>
        </Admin>);
    }
    
    export default Profile;