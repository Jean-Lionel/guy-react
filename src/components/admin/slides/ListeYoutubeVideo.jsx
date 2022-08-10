import { Box, Button, Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import YoutubeEmbed from "../../../blog/components/YoutubeEmbed";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const ListeYoutubeVideo = () => {
    const { data, isLoading, error , paginate, refreshSearch } = useFetchDataWithPagination("youtube_medias");
  const [youtubes, setYoutubes] = useState(null);
  const { submitData } = usePostData()

    useEffect(() => {
        if(data?.data){
          setYoutubes(data?.data.data)
        }
      },[data])

  const deleteMedia = (id) => {

    const response = window.confirm("êtes-vous sûr ? ")

    if (response) {
      submitData("youtube_medias/" + id, null, "DELETE")
      refreshSearch()
    }
       
      }

    return ( <Box>
    <Card >
      {isLoading && <p>.... is loading</p>}
        <Grid container spacing={2}>
          {youtubes && youtubes.map((youtube,index) => (
             <Grid item md={3} xs={12} key={index}>
             <YoutubeEmbed embedId={youtube.youtube_media} />
             <button className="btn btn-danger btn-block btn-sm" onClick={() => deleteMedia(youtube.id)}>
                 Supprimer
             </button>
             </Grid>

          ))}
        </Grid>
        {paginate()}
      
    </Card>

    </Box> );
}
 
export default ListeYoutubeVideo;