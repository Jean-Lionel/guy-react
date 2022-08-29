import { Box, FormControl, InputLabel, Input, Button, Alert, Select, MenuItem, TextField } from "@mui/material";
import { useState, useEffect } from "react";
//import usePostData from "../../../utility/usePostData";
import axios from "axios"
import useFetchData from "../../../utility/useFecthData";
import { useHistory, useParams } from "react-router-dom"

const FormAddInstution = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("XX");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  let { data: roles } = useFetchData("roles");
  const [roleId, setRoleId] = useState("");
  let { id: institution_id } = useParams();
  const [errorMessages, setErrorMessages] = useState(null)

  useEffect(() => {
    if (error && error.errors) {
      setErrorMessages(Object.entries(error.errors))
    }

  }, [error])

  const submitData = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
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
        role_id: roleId,
        telephone,
        description,
        mobile,
        institution_id

      }, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      // console.log(response.data.access_token, response.data.data);
      // localStorage.setItem('token', response.data.access_token);
      // localStorage.setItem('user', JSON.stringify(response.data.data));
      setIsLoading(false);
      // window.location.href = '/admin';
      window.location.reload();
      console.log(response.data)


    } catch (error) {
      setError(error);
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
        <h5>Ajouter un utilisateur</h5>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard" size="small">
          <InputLabel htmlFor="name">Nom et Prénom *</InputLabel>
          <Input
            id="name"
            value={name}
            required
            onChange={(e) => (setName(e.target.value))}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard" size="small">
          <InputLabel htmlFor="email">Email *</InputLabel>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => (setEmail(e.target.value))}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard" size="small">
          <InputLabel htmlFor="telephone">Téléphone</InputLabel>
          <Input
            id="telephone"
            type="text"
            required
            value={telephone}
            onChange={(e) => (setTelephone(e.target.value))}
          />
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel id="role_id">Role</InputLabel>
          <Select
            labelId="role_id"
            id="role_id"
            value={roleId}
            label="Age"
            onChange={(e) => (setRoleId(e.target.value))}
          >
            {roles && roles?.data?.map((role, index) => (
              (role.name === 'EMPLOYEUR') && <MenuItem key={index} value={role?.id}>{role?.name}</MenuItem>
            ))
            }

          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard" size="small">
          <InputLabel htmlFor="password">Mot de passe *</InputLabel>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => (setPassword(e.target.value))}
          />
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard" size="small">
          <TextField
            id="description"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"

            onChange={(e) => (setDescription(e.target.value))}
          />
        </FormControl>
        <Button variant="contained" type="submit" onClick={submitData}>Enregistrer</Button>
        {isLoading && (
          <div>
            Is Loading...
          </div>
        )}
        {error && (
          <Box>
            <Alert severity="error">{
              error.message
            }</Alert>
            {
              errorMessages && (<div>
                {
                  errorMessages && errorMessages.map(e => (
                    <Alert severity="error">
                      {JSON.stringify(e)}
                    </Alert>
                  ))
                }
              </div>)

            }

          </Box>

        )}

      </div>

    </Box>
  )
}

export default FormAddInstution;