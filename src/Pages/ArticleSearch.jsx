import { Box, Container, CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleMap from "../blog/components/GoogleMap";
import LeftSideCard from "../blog/components/LeftSideCard";
import RightSideCard from "../blog/components/RightSideCard";
import YoutubeComponent from "../blog/components/YoutubeComponent";
import Footer from "../blog/Footer";
import Header from "../blog/Header";
import { useParams } from "react-router-dom"
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import MainFeaturedPost from "../blog/MainFeaturedPost";
import { useSelector } from "react-redux";
import CarsoulTest from "./Admin/CarsoulTest";

const theme = createTheme();
const ArticleSearch = () => {

  const { id } = useParams();
  const { data } = useFetchDataWithPagination("admin_contents/" + id);
  const [contenu, setContenu] = useState(null);
  const { currentLanguage } = useSelector((storeOf) => {
    return { currentLanguage: storeOf.nisys.currentLanguage };
  })
  useEffect(() => {
    if (data?.data) {
      setContenu(data?.data)
    }

  }, [data])


  return (<ThemeProvider theme={theme}>
    <CssBaseline />
    <Container maxWidth="lg">
          <Header />
          <CarsoulTest />
      <main>
       

        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <LeftSideCard />
          </Grid>
          <Grid item xs={12} md={6}>

            {contenu && (
              <Box>
                <h4>{
                  (contenu.title_en && currentLanguage.code === 'en') ?
                    contenu.title_en : contenu.title
                }</h4>
                <ReactQuill
                  value={
                   (contenu.description_en &&  currentLanguage.code === 'en') ?
                      contenu.description_en : contenu.description
                  }
                  readOnly={true}
                  modules={{
                    toolbar: false,

                  }}

                />
              </Box>
            )}

          </Grid>
          <Grid item xs={12} md={3}>
            <RightSideCard />
          </Grid>
        </Grid>
        {/* <BlogArticlesListe/> */}
        <YoutubeComponent />
        <GoogleMap />
      </main>
    </Container>
    <Footer />
  </ThemeProvider>);
}

export default ArticleSearch;