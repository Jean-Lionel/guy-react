import { Box, Container, Grid, LinearProgress } from "@mui/material";
import Footer from "../blog/Footer";
import Header from "../blog/Header";
import {useParams} from "react-router-dom"
import useFetchData from "../utility/useFecthData";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import LeftSideCard from "../blog/components/LeftSideCard";

const DetailBlog = () => {
    const { id } = useParams();
    const { data, isLoading } = useFetchData("articles/" + id);

    const { data: articles } = useFetchData("toutArticles");

    const [artcle, setArtcle] = useState(null);
    const [linkArtcles, setLinkArtcles] = useState(null);

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
                            {artcle.title}
                                    </h1>
                                    
                                    {artcle.image && (
                                         <div>
                                         <img src={artcle.image_source_url} className="container-fluid" alt={artcle.title } />
                                     </div>
                                    )}
                       

                        <ReactQuill
                            value={artcle.body}
                                readOnly={true}
                                modules = {{
                                    toolbar : false,
          
                                }}
                        
                            />
                            
                            <div>
                                <small>
                                    Partagé le  { new Date(artcle.created_at).toLocaleDateString() } 
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
                        <h4>Autres informations</h4>
                        <ul>
                            {linkArtcles && linkArtcles.map(article => {
                                return <li key={article.id} style={{ textAlign: 'left'}}>
                                    <a href={`/detail/${article.id}`}>{article.title.toLowerCase()}</a>
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
 
export default DetailBlog;