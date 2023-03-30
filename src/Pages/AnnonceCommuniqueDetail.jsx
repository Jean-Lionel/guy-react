import { Box, Container, Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSideCard from "../blog/components/LeftSideCard";
import Footer from "../blog/Footer";
import Header from "../blog/Header";
import useFetchData from "../utility/useFecthData";
import CarsoulTest from "./Admin/CarsoulTest";

const AnnonceCommuniqueDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useFetchData("annonces/" + id);
    const { data: articles } = useFetchData("toutArticles");
    const [artcle, setArtcle] = useState(null);
    const [linkArtcles, setLinkArtcles] = useState(null);

    const { currentLanguage } = useSelector((storeOf) => {
        return { currentLanguage: storeOf.nisys.currentLanguage };
    });

    useEffect(() => {
            if(articles?.data){
                setLinkArtcles(articles.data)
        }
    }, [articles])
    useEffect(() => {

        if (data?.data) {
            setArtcle(data.data)
        }

    }, [data, artcle])
    return (<Box>
         <Container maxWidth="lg">
            <Header />
            {isLoading && <LinearProgress color="success" />}
               <CarsoulTest />
            <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
             <LeftSideCard/>
            </Grid>
            
            <Grid item xs={12} md={6}>
            <Box>
                <Grid container spacing={2}>
                    {artcle && (
                    <Grid item md={12}>
                        <h1 className="title-article">
                                        {
                                            currentLanguage.code === 'en' ?
                                                (artcle.title_en ? artcle.title_en : artcle.title) : artcle.title
                                          
                                        }
                                    </h1>
                                    
                                    {artcle.image && (
                                         <div>
                                         <img src={artcle.image_source_url} className="container-fluid" alt={artcle.title } />
                                     </div>
                                    )}
                       

                        <ReactQuill
                                        value={
                                            currentLanguage.code === 'en' ?
                                                (artcle.body_en ? artcle.body_en : artcle.body) : artcle.body
                                            }
                                readOnly={true}
                                modules = {{
                                    toolbar : false,
          
                                }}
                        
                            />
                            
                            <div>
                                <small>
                                           
                                            {
                                                currentLanguage.code === 'en' ? "": "Partagé le" 
                                                    
                                        }
                                            
                                            {new Date(artcle.created_at).toLocaleDateString()} 
                                </small>
                            </div>
                        </Grid>
                     )} 

                </Grid>

                
            </Box>  
            </Grid>
            <Grid item xs={12} md={3}>
                    {/* <RightSideCard /> */}
                    <>
                        <h4>{
                            currentLanguage.code === 'en' ? "Other informations" : "Autres informations"
                        
                        }</h4>
                        <ul>
                            {linkArtcles && linkArtcles.map(article => {
                                return <li key={article.id} style={{ textAlign: 'left'}}>
                                    <a href={`/detail/${article.id}`}>
                                        {
                                            currentLanguage.code === 'en' ?
                                                (article.title_en ? article.title_en : article.title).toLowerCase() :
                                                article?.title.toLowerCase()
                                        
                                
                                        
                                        }</a>
                                </li>
                            }
                            )}  
                        </ul>
                    </>

            </Grid>
            </Grid>
            
           
        </Container>
        <Footer />
    </Box>);
}
 
export default AnnonceCommuniqueDetail;