import { useState } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import { Box, Alert, FormControl, Input, InputLabel, Button } from "@mui/material";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import { useEffect } from "react";

const TraduireArticle = () => {

    const [title_en, setTitle_en] = useState("");
    const [title, setTitle] = useState("");
    const [body_en, setBody_en] = useState("")
    const [body, setBody] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    let history = useHistory();
    const { id } = useParams();
    const { data: article } = useFetchDataWithPagination("articles/" + id)


    useEffect(() => {
      
        if (article?.data) {
            const x = article?.data;
            setTitle(x.title);
            setTitle_en(x.title_en);
            setBody_en(x.body_en);
            setBody(x.body);
            
        }
      return () => {
        
      }
    }, [article])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        // data.append("image", selectedFile)

        axios.put("articles/" + id,
            {
                title_en: title_en,
                title_fr: title,
                body_en: body_en,
                body_fr: body,
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
                    width: "96%",
                    margin: "auto",
                }}
            >
                {errorMessage.errors &&
                    (
                        <Alert> Vérifier vos informations</Alert>
                    )
                }
                <form action="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                             <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <h4>Traduction en Français</h4>
                        <InputLabel htmlFor="title"  >Title : <span>
                            {article?.data?.title}
                        </span></InputLabel>
                        <Input
                            id="title"
                            value={title}
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
                        </div>
                        {/* TRANDUCTION EN ANGLAIS */}
                        <div className="col-md-6">
                             <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <h4>Traduction en anglais</h4>
                        <InputLabel htmlFor="title"  >Title : <span>
                            {article?.data?.title}
                        </span></InputLabel>
                        <Input
                            id="title"
                            value={title_en}
                            required
                            onChange={(e) => (setTitle_en(e.target.value))}
                        ></Input>

                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="body"  >Description</InputLabel>
                        <ReactQuill
                            theme="snow" value={body_en}
                            onChange={setBody_en}
                        >
                        </ReactQuill>

                    </FormControl>
                        </div>
                    </div>

                   



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