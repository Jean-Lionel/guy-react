import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import usePostData from "../../../utility/usePostData";

const ContactCreate = (props) => {
    const [title_en, setTitle_en] = useState("");
    const [title_fr, setTitle_fr] = useState("");
    const [content_en, setContent_en] = useState("");
    const [content_fr, setContent_fr] = useState("");
    const { submitData} = usePostData();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitData("contacts", {
            title_en,title_fr,content_en,content_fr
        });
         props.setIsFinish(true)
    }
    return (<Box sx={{width: '99%'}}>
        <h6>Création des contacts</h6>
        <form action="" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                     <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="title_fr"  >Titre en Français</InputLabel>
                <Input id="title" value={title_fr}
                            required
                            onChange={(e) => (setTitle_fr(e.target.value))}
                        ></Input>
                
            </FormControl>
                </div>
                <div className="col-md-6">
                      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="title_en"  >Titre en Anglais</InputLabel>
                <Input id="title_en" value={title_en}
                            required
                            onChange={(e) => (setTitle_en(e.target.value))}
                ></Input>
            </FormControl>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                     <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="content_fr"  >Contenue en Anglais</InputLabel>
                        
                        <ReactQuill
                        theme="snow" value={content_fr}
                        onChange={setContent_fr}

                    >
                    </ReactQuill>
                        
        
            </FormControl>
                </div>
                <div className="col-md-6">
                      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="content_en"  >Contenue en Anglais</InputLabel>
                 <ReactQuill
                        theme="snow" value={content_en}
                        onChange={setContent_en}
                    >
                    </ReactQuill>
            </FormControl>
                </div>
            </div>
           
            <div className="row">
                <div className="offset-6  col-md-6">
                  <Button type="submit" variant="contained">
                    Enregistrer
                    </Button>
                </div>
            </div>
            
         </form>

    </Box>);
}
 
export default ContactCreate;