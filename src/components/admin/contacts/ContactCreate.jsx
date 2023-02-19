import { Box, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";

const ContactCreate = () => {
    const [title_en, setTitle_en] = useState("");
    const [title_fr, setTitle_fr] = useState("");
    const [content_en, setContent_en] = useState("");
    const [content_fr, setContent_fr] = useState("");

    const handleSubmit = () => {
        alert('Je suis en bonne du forme')
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
                <Input id="content_fr" value={content_fr}
                            required
                            onChange={(e) => (setContent_fr(e.target.value))}
                ></Input>
            </FormControl>
                </div>
                <div className="col-md-6">
                      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="content_fr"  >Contenue en Anglais</InputLabel>
                <Input id="content_fr" value={content_fr}
                            required
                            onChange={(e) => (setContent_fr(e.target.value))}
                ></Input>
            </FormControl>
                </div>
            </div>
           
            <div>
            </div>
            
         </form>

    </Box>);
}
 
export default ContactCreate;