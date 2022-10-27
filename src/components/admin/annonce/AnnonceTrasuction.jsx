import { Alert, Box, LinearProgress } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useHistory, useParams } from "react-router";
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const AnnonceTrasuction = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { error, submitData, isLoading } = usePostData();
    const history = useHistory();
    const { id } = useParams();

    const { data: annonce } = useFetchDataWithPagination("annonces/" + id)


    const saveData = (e) => {
        e.preventDefault();

        if (title === "" || body === "") {
            alert("completer tout les champs")
            return false;
        }
        const x = { title, body }
        submitData("annonces/" + id, x, "PUT")

        history.push("/annonce")
    }
    return (<Admin>
        <h5 className="text-center">Traduction de l'annonce en Anglais</h5>

        <Box sx={{
            width: '80%',
            margin: "auto"
        }}>
            <form action="" onSubmit={saveData} >
                <div className="form-groupe">
                    <label className="text-left">Titre : {annonce?.data?.title}</label>
                    <input type="text" className="form-control" required value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="" />
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

export default AnnonceTrasuction;