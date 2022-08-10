import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import AnnonceLineShow from "../blog/Articles/AnnonceLineShow";
import GoogleMap from "../blog/components/GoogleMap";
import LeftSideCard from "../blog/components/LeftSideCard";
import RightSideCard from "../blog/components/RightSideCard";
import YoutubeComponent from "../blog/components/YoutubeComponent";
import Footer from "../blog/Footer";
import Header from "../blog/Header";
const theme = createTheme();
const AnnonceCommunique = () => {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ backgroundColor: 'rgba(0,255,255,0)'}}>
          <Header />
          <main>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
               <LeftSideCard/>
              </Grid>
              
              <Grid item xs={12} md={6}>
               <AnnonceLineShow/>
              </Grid>
              <Grid item xs={12} md={3}>
               <RightSideCard/>
              </Grid>
            </Grid>
          
            {/* <YoutubeComponent/> */}
            <GoogleMap/>
          </main>
        </Container>
        <Footer/>
      </ThemeProvider>
    
    );
}
 
export default AnnonceCommunique;