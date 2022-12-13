import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ReactQuill from "react-quill";
import usePostData from "../../../utility/usePostData";

const InfoAdd = () => {
    const [title_en, setTitle_en] = useState("")
    const [title_fr, setTitle_fr] = useState("")
    const [body_fr, setBody_fr] = useState("");
    const [body_en, setBody_en] = useState("");
    const { submitData} =usePostData();
    
    const saveInformation = (e) => {
        e.preventDefault();
        if(title_en.length > 0 && body_fr.length > 0) {
            submitData("informations", {
                title_en: title_en, 
                description_fr: body_fr,
                description_en: body_en,
                title_fr: title_fr
                })
        }
    }
    return ( <Box sx={{ m:2}}>
        <form>
        
        <div className="row">
        <div className="col-md-6">
        <div className="form-group">
         <label>Titre en Français</label>
        <Input value={title_fr} onChange={(e) => setTitle_fr(e.target.value)}  fullWidth></Input>
        </div>
       
        <label>Déscription en Français</label>
        <ReactQuill
        theme="snow" value={body_fr}
        onChange={setBody_fr}
        >
        </ReactQuill>
        </div>
        <div className="col-md-6">
         <div className="form-group">
         <label>Titre en Anglais</label>
        <Input value={title_en} onChange={(e) => setTitle_en(e.target.value)}  fullWidth></Input>
        </div>
       
        <label>Déscription en Anglais</label>
        <ReactQuill
        theme="snow" value={body_en}
        onChange={setBody_en}
        >
        </ReactQuill>
        </div>
        </div>
        
        <Button variant="contained" onClick={(e) => saveInformation(e)}> Enregistrer</Button>
        </form>
        </Box> );
    }
    
    export default InfoAdd;