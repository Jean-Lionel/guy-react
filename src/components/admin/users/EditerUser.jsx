import { Box, LinearProgress, FormControl, InputLabel, Input, Button, Alert, Select,MenuItem , TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetchData from "../../../utility/useFecthData";
import usePostData from "../../../utility/usePostData";

const EditerUser = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useFetchData("users/" + id);
    const { response, isLoading: postLoading, error : postError,finished,  submitData  } = usePostData();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [mobile, setMobile] = useState("");
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    let {data: roles} = useFetchData("roles");
    const [roleId, setRoleId] = useState("");
    
    const history = useHistory();

    useEffect(() => {

        if (data?.data ) {
            const user = data.data
            setName(user.name)
            setEmail(user.email)
            setTelephone(user.telephone)
            setMobile(user.mobile)
            setDescription(user.description)
            setRoleId(user.roleId)

        }

    }, [data])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            telephone,
            mobile,
            description,
            password,
            role_id : roleId
        }
        submitData("users/" + id, data, "PUT");
    }

    return (<Box sx={{ 
        margin: "auto",
        maxWidth: "600px",
    }}>
        {isLoading && <LinearProgress />}
        {error && <p>{error.message}</p>}
        {postError && <Alert severity="error">{postError.message}</Alert>}
        {postLoading && <LinearProgress />}
        {JSON.stringify(response)}
        {finished && history.push("/users")}
        {data?.data && (
        <div>
            <h1>Modifier l'utilisateur</h1>
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
              {roles && roles?.data?.map((role, index) =>(
                (role?.name.toUpperCase() !== "EMPLOYEUR") && <MenuItem key={index} value={role?.id}
                      selected={(roleId === role?.id) ? 'selected' : 'false'}>
                      {role?.name}</MenuItem>
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
          defaultValue={description}

          onChange={(e) => (setDescription(e.target.value))}
        />
        </FormControl>


        {postLoading && ( 
            <div>
                Is Loading...
            </div>
        )}
        {postError && (
            <Alert severity="error">{ error }</Alert>
        )}
        <Button variant="contained" type="submit" onClick={handleSubmit}>Enregistrer</Button>
            </div>
            
            )}

    </Box>);
}
 
export default EditerUser;