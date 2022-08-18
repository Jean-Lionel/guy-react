import { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Box, Alert, FormControl, Input, InputLabel, Button, FilledInput, TextField } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddArticle = () => {

    const [title, setTitle] = useState("");
    const [bodyFr, setBodyFr] = useState("");
    const [bodyEn, setBodyEn] = useState("");
    const [selectedFile, setSelectedFile] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token")
        const data = new FormData()

        data.append("title", title)
        data.append("body", bodyFr)
        data.append("body_en", bodyEn)
        data.append("image", selectedFile)

        axios.post("articles",
            data,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        )
            .then(function (response) {
                console.log(response)
                history.push("/admin-article");
            })
            .catch(function (error) {
                setErrorMessage(error.response.data)
                console.log(error)
            }).finally((e) = {
            })
    }
    return (
        <Box
            sx={{
                width: "80%",
                margin: "auto",

            }}
        >
            {errorMessage.errors &&
                (
                    <Alert> Vérifier vos informations</Alert>
                )
            }
            <form action="" onSubmit={handleSubmit}>

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <h4>Ajouter un Article</h4>
                    <InputLabel htmlFor="title"  >Titre</InputLabel>
                    <Input
                        id="title"
                        value={title}
                        required
                        onChange={(e) => (setTitle(e.target.value))}
                    ></Input>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="body"  >Texte (Francais)</InputLabel>
                    <ReactQuill
                        theme="snow" value={bodyFr}
                        onChange={setBodyFr}
                    />

                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="body_en"  >Texte (Anglais)</InputLabel>
                    <ReactQuill
                        theme="snow" value={bodyEn}
                        onChange={setBodyEn}
                    />

                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <FilledInput
                        type="file"
                        id="image"
                        label="Image"
                        onChange={(e) => (setSelectedFile(e.target.files[0]))}
                    ></FilledInput>
                </FormControl>

                <Button type="submit" variant="contained">
                    Enregistrer
                </Button>

                {errorMessage && <Alert severity="error">{errorMessage} </Alert>}
            </form>


        </Box>

    );
}

export default AddArticle;