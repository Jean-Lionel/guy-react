import { Box, FormControl, InputLabel, Input, Button, Alert, Select,MenuItem , TextField} from "@mui/material";
import { useState } from "react";
//import usePostData from "../../../utility/usePostData";
import axios from "axios"
import { useHistory } from "react-router-dom";
import useFetchData from "../../../utility/useFecthData";

const AddUser = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [mobile, setMobile] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    let {data: roles} = useFetchData("roles");
    const [roleId, setRoleId] = useState("");
    const history = useHistory();

    const submitData = async (e) => {
        e.preventDefault();

        if(!name || !email || !password){
            setError("Completez tout les champs !!");
            return
        }
        setIsLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await axios.post('users', {
                name,
                email,
                password,
                role_id : roleId,
                telephone,
                description,
                mobile,

            },{
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            // console.log(response.data.access_token, response.data.data);
            // localStorage.setItem('token', response.data.access_token);
            // localStorage.setItem('user', JSON.stringify(response.data.data));
            setIsLoading(false);
            // window.location.href = '/admin';
            history.push("/users")
            console.log(response.data)
        } catch (error) {
            setError(error.response.data.message);
            setIsLoading(false);
        }
       
    }

    return ( 
    <Box
    sx={{
      width: "80%",
      margin: "auto",
     
    }}
    
    >
        <div>
            <h1>Ajouter un utilisateur</h1>
        <FormControl fullWidth sx={{ m: 1 }}  size="small" variant="standard">
          <InputLabel htmlFor="name" size="small">Nom et Prénom *</InputLabel>
          <Input
            id="name"
            value={name}
            required
            size="small"
            onChange={(e) => (setName(e.target.value))}
          />
        </FormControl>
        <FormControl size="small" fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="email">Email *</InputLabel>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          />
        </FormControl>

        <FormControl size="small" fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="telephone">Téléphone</InputLabel>
          <Input
            id="telephone"
            type="text"
            required
            value={telephone}
            onChange={(e) => (setTelephone(e.target.value))}
          />
        </FormControl>

        <FormControl size="small" fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="mobile">Mobile</InputLabel>
          <Input
            id="mobile"
            type="text"
            required
            value={mobile}
            onChange={(e) => (setMobile(e.target.value))}
          />
        </FormControl>

        <FormControl size="small" fullWidth>
            <InputLabel id="role_id">Role</InputLabel>
            <Select
              size="small"
              labelId="role_id"
              id="role_id"
              value={roleId}
              label="Age"
              onChange={(e) => (setRoleId(e.target.value))}
            >
              {roles && roles?.data?.map((role, index) => (
             
              (!role?.name?.toLowerCase().includes("employeur")) && <MenuItem key={index} value={role?.id}>{role?.name}</MenuItem>
              ))
              }
             
            </Select>
        </FormControl>

        <FormControl size="small" fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel size="small" htmlFor="password">Mot de passe *</InputLabel>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
          />
        </FormControl>

        <FormControl size="small" fullWidth sx={{ m:1 }} variant="standard">
        <TextField
          id="description"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""

          onChange={(e) => (setDescription(e.target.value))}
        />
        </FormControl>


        {isLoading && ( 
            <div>
                Is Loading...
            </div>
        )}
        {error && (
            <Alert severity="error">{ error }</Alert>
        )}
        <Button variant="contained" type="submit" onClick={submitData}>Enregistrer</Button>
        </div>

    </Box> );
}
 
export default AddUser;