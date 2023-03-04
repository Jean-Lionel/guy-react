import { Alert, Box, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useHistory, useParams } from "react-router";
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const AnnonceTrasuction = () => {
    
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [title_en, setTitle_en] = useState("")
    const [body_en, setbody_en] = useState("")
    
    const { error, submitData, isLoading } = usePostData();
    const history = useHistory();
    const { id } = useParams();
    const { data: annonce } = useFetchDataWithPagination("annonces/" + id)
    
    useEffect(() => {
        if (annonce?.data?.body) {
            setBody( annonce?.data?.body)
            setTitle( annonce?.data?.title)
            setTitle_en( annonce?.data?.title_en)
            setbody_en( annonce?.data?.body_en)
        }
    }, [annonce])
    
    const saveData = (e) => {
        e.preventDefault();
        
        if (title === "" || body === "") {
            alert("completer tout les champs")
            return false;
        }
        const x = { title, body , title_en, body_en}
        submitData("annonces/" + id, x, "PUT")
        
        // history.push("/annonce")
    }
    return (<Admin>
        <form onSubmit={saveData}>
        <div className="row">
            
        <div className="col-md-6">
        <h5 className="text-center"> Anglais</h5>
        <Box sx={{
            width: '80%',
            margin: "auto"
        }}>
        
        <div className="form-groupe">
        <label className="text-left">Title : {annonce?.data?.title_en}</label>
        <input type="text" className="form-control" required value={title_en} onChange={(e) => { setTitle_en(e.target.value) }} placeholder="" />
        </div>
        
        <div className="form-groupe">
        <label className="text-left">Description</label>
        <ReactQuill
        theme="snow" value={body_en}
        onChange={setbody_en}>
        
        </ReactQuill>
        </div>
        {isLoading && <LinearProgress color="success" />}
        {error && <Alert severity="error">
        {JSON.stringify(error)}
        </Alert>}
        
        
        </Box>
        </div>
        <div className="col-md-6">
        <h5 className="text-center"> Français</h5>
        <Box sx={{
            width: '80%',
            margin: "auto"
        }}>
        
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
        <button type="submit" className="btn btn-primary" >Enregistrer</button>
        </div>
        
        </Box>
                </div>
                
        </div>
        </form>
        </Admin>);
    }
    
    export default AnnonceTrasuction;