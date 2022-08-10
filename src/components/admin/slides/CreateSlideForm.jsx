import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import usePostData from "../../../utility/usePostData";
import ListeYoutubeVideo from "./ListeYoutubeVideo";

const CreateSlideForm = () => {
    const {response, isLoading, error, submitData}  = usePostData()
    const [youtube_title, setYouTubeTitle] = useState("");
    const [youtube_media, setYouTubeMedia] = useState("");
    const [response_message, setResponseMessage] = useState("");

    useEffect(() => {
        if(response?.data){
            setResponseMessage(response?.data.data)
        }
        return{

        }

    }, [response])

    const sendData = (e) => {
        e.preventDefault();
        // console.log('send data');
        const media = {
            youtube_title: youtube_title,
            youtube_media: youtube_media
        }
        submitData("youtube_medias", media)
    }
    return ( <Box>
       
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <form onSubmit={sendData}>
                    <h5>
                        Ajouter une Vidéo
                    </h5>
                    {response && <p>{JSON.stringify(response_message)}</p>}
                    <TextField size="small" type="text" 
                    value={youtube_title} 
                    onChange={(e) => setYouTubeTitle(e.target.value)}  
                    placeholder="Title" 
                    label="Title"
                    sx={{
                        width: "200px",
                        mr: 2

                    }}
                    />
                    <TextField 
                    size="small" 
                    type="text"
                    value={youtube_media}
                    label="youtube Media" 
                    sx={{
                        width: "200px",
                        mr: 2

                    }}
                    onChange={(e) => setYouTubeMedia(e.target.value)} placeholder="Description" />
                    <Button type="submit" variant="contained" size="small">Enregistrer</Button>
                </form>
                {isLoading && <p>Loading...</p>}
                {error && <Alert severity="error">Error: Vos données sont erroné</Alert>}
            </Grid>
            <Grid item md={8}>
            </Grid>
            <Grid item md={12}>
                    <ListeYoutubeVideo></ListeYoutubeVideo>
            </Grid>
            
        </Grid>


        </Box> );
}
 
export default CreateSlideForm;