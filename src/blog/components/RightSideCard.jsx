import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import RightSideTwitter from './leftSideComponent/RightSideTwitter';


function RightSideCard(props) {

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a" href="#">
        <Card sx={{
          display: 'flex',
          height: '800px',
          overflowY: 'scroll'

        }}>
          <CardContent sx={{ flex: 1 }}>
            <RightSideTwitter />
          </CardContent>

        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default RightSideCard