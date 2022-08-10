import { Alert, Box, LinearProgress } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useHistory } from "react-router";
import Admin from "../../../Pages/Admin";
import usePostData from "../../../utility/usePostData";

const AnnonceAdd = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { error, submitData, isLoading } = usePostData();
    const history = useHistory();
    const saveData = (e) => {
        e.preventDefault();

        if (title === "" || body === "") {
            alert("completer tout les champs")
            return false;
        }
        const x = { title, body}
        submitData("annonces", x)

        history.push("annonce")
    }
    return (<Admin>
        <Box sx={{
            width: '80%',
            margin: "auto"
        }}>
            <form action="" onSubmit={saveData} >
                <div className="form-groupe">
                    <label className="text-left">Titre</label>
                    <input type="text" className="form-control" required value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder=""/>
                </div>

                <div className="form-groupe">
                    <label className="text-left">Déscription</label>
                    <ReactQuill
                        theme="snow" value={body}
                         onChange={setBody}>

                    </ReactQuill>
                </div>
                {isLoading && <LinearProgress color="success" />}
                {error && <Alert severity="error">
                    {JSON.stringify(error)}
                </Alert>}
                <div className="form-groupe mt-3">
                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        </Box>
    </Admin>);
}
 
export default AnnonceAdd;