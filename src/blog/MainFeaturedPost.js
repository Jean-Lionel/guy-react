import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import L from "react-router-dom/Link"
import useFetchDataWithPagination from '../utility/useFetchDataWithPagination';

function MainFeaturedPost(props) {

  const { data } = useFetchDataWithPagination("slides");
  const [background, setBackground] = React.useState("")
  
  React.useEffect(() => {
    if (data?.data) {
      setBackground(data?.data?.data[0])
    }

  }, [data])

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${background?.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              ONPR 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Office National des Pensions et Risques Professionnels des      
              Fonctionnaires, des Magistrats et des Agents de l’Ordre Judiciaire
            </Typography>
            <L variant="subtitle1" to="/" style={{
              color: '#fff',
              textDecoration: 'none',
              cursor: 'pointer',
            }}>
              www.onpr.bi            
              </L>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MainFeaturedPost;
