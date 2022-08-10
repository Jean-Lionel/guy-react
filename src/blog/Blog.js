import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Footer from './Footer';
import LeftSideCard from './components/LeftSideCard';
import RightSideCard from './components/RightSideCard';
import GoogleMap from './components/GoogleMap';
import YoutubeComponent from './components/YoutubeComponent';
import ArticleInlineShow from './Articles/ArticleInlineShow';
//Connaître ONPR || Information || Nouvelles || Annonces & Communiqués || Contacts
const theme = createTheme();
export default function Blog() {
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
             <ArticleInlineShow></ArticleInlineShow>
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
