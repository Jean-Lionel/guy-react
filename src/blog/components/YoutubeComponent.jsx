import * as React from 'react';
import Card from '@mui/material/Card';

import { Grid } from '@mui/material';
import YoutubeEmbed from './YoutubeEmbed';
import { useState,useEffect } from 'react';
import useFetchDataWithPagination from '../../utility/useFetchDataWithPagination';

export default function YoutubeComponent() {

  const {data, isLoading,error} = useFetchDataWithPagination("youtube_medias")
  const [youtubes , setYoutubes] = useState(null)

  useEffect(() => {
    if(data?.data){
      setYoutubes(data?.data.data)
    }
  },[data])

  return (
    <Card >
      {isLoading && <p>.... is loading</p>}
        <Grid container spacing={2}>
          {youtubes && youtubes.map((youtube,index) => (
             <Grid item xs={12} md={3} key={index}>
             <YoutubeEmbed embedId={youtube.youtube_media} />
             </Grid>

          ))}
        </Grid>
      
    </Card>
  );
}
