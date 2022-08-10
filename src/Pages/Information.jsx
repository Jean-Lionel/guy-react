import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import MainFeaturedPost from '../blog/MainFeaturedPost';
import LeftSideCard from '../blog/components/LeftSideCard';
import RightSideCard from '../blog/components/RightSideCard';
import HomeAccueil from '../components/web/HomeAccueil';
import YoutubeComponent from '../blog/components/YoutubeComponent';
import GoogleMap from '../blog/components/GoogleMap';
import Footer from '../blog/Footer';

//Connaître ONPR || Information || Nouvelles || Annonces & Communiqués || Contacts
const theme = createTheme();
export default function Information() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: 'rgba(0,200,255,0)'}}>
        <Header />
        <main>
          <MainFeaturedPost />
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
             <LeftSideCard/>
            </Grid>
            <Grid item xs={12} md={6}>
             <HomeAccueil/>
            </Grid>
            <Grid item xs={12} md={3}>
             <RightSideCard/>
            </Grid>
          </Grid>
          {/* <BlogArticlesListe/> */}
          <YoutubeComponent/>
          <GoogleMap/>
        </main>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}
