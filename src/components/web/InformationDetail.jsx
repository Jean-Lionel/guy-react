import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useFetchData from '../../utility/useFecthData';
import { useSelector } from 'react-redux';
import Header from '../../blog/Header';
import MainFeaturedPost from '../../blog/MainFeaturedPost';
import LeftSideCard from '../../blog/components/LeftSideCard';
import RightSideCard from '../../blog/components/RightSideCard';
import Footer from '../../blog/Footer';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import CarsoulTest from '../../Pages/Admin/CarsoulTest';
const theme = createTheme();

const InformationDetail = () => {
      const { id } = useParams();
    const {data} = useFetchData('informations/'+id);
    const [article, setArticle] = React.useState("")
    const { currentLanguage } = useSelector((storeOf) => {
        return { currentLanguage: storeOf.nisys.currentLanguage };
    })
    React.useEffect(() => {
        if(data?.data){
            setArticle(data?.data)
        }
    },[data])
    // const body = {
    //     title: {
    //         fr: article?.title_fr,
    //         en: article?.title_en,
    //     },
    //     article: {
    //         fr: article?.description_fr,
    //         en: article?.description_en,
    //     }
    // };   
   
    return (<ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ backgroundColor: 'rgba(0,200,255,0)'}}>
            <Header />
            <CarsoulTest />
        <main>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
             <LeftSideCard/>
            </Grid>
            <Grid item xs={12} md={6}>
          
             {article && <div>
              <h1 className="title-article">
                      {currentLanguage.code === "en"
                        ? article.title_en
                          ? article.title_en
                          : article.title_fr
                        : article.title_fr}
                    </h1>

                     <ReactQuill
                      value={
                        currentLanguage.code === "en"
                          ? article.description_en
                            ? article.description_en
                            : article.description_fr
                          : article.description_fr
                      }
                      readOnly={true}
                      modules={{
                        toolbar: false,
                      }}
                    />
             </div>}
            </Grid>
            <Grid item xs={12} md={3}>
             <RightSideCard/>
            </Grid>
          </Grid>
          {/* <BlogArticlesListe/> */}
          
          
        </main>
      </Container>
      <Footer/>
    </ThemeProvider>);
    }
    
    export default InformationDetail;