import { useState } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import { Box, Alert, FormControl, Input, InputLabel, Button, FilledInput } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";

const TraduireArticle = () => {

    const [title_en, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let history = useHistory();
    const { id } = useParams();
    const { data: article } = useFetchDataWithPagination("articles/" + id)


    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token")

        // data.append("image", selectedFile)

        axios.put("articles/" + id,
            {
                title_en: title_en,
                body_en: body,
                id: id,
            },
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
        <Admin>
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
                        <h4>Traduction en anglais</h4>
                        <InputLabel htmlFor="title"  >Title : <span>
                            {article?.data?.title}
                        </span></InputLabel>
                        <Input
                            id="title"
                            value={title_en}
                            required
                            onChange={(e) => (setTitle(e.target.value))}
                        ></Input>

                    </FormControl>



                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="body"  >Description</InputLabel>
                        <ReactQuill
                            theme="snow" value={body}
                            onChange={setBody}

                        >
                        </ReactQuill>

                    </FormControl>



                    <Button type="submit" variant="contained">
                        Enregistrer
                    </Button>

                    {errorMessage && <Alert severity="error">{errorMessage} </Alert>}
                </form>


            </Box>

        </Admin>

    );
}

export default TraduireArticle;