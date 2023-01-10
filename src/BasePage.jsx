import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './blog/Header';
// import MainFeaturedPost from './blog/MainFeaturedPost';
import Footer from './blog/Footer';
import BaseLeftSideCard from './components/web/BaseLeftSideCard';

//Connaître ONPR || Information || Nouvelles || Annonces & Communiqués || Contacts
const theme = createTheme();

export default function BasePage(props ) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Header />
        <main >
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
             <BaseLeftSideCard/>
            </Grid>
            <Grid item xs={12} md={9}>
             {props.children}
            </Grid>
          </Grid>
          {/* <BlogArticlesListe/>
          <YoutubeComponent/>
          <GoogleMap/> */}
        </main>
      </Container>
      <Footer
       
      />
    </ThemeProvider>
  );
}
