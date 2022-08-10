import { CssBaseline, Grid } from "@mui/material";
import useFetchData from "../../utility/useFecthData";
import CardBlog from "./CardBlog";

const  BlogArticlesListe= () => {
    let {data: articles, isLoading, error} = useFetchData("articles");
    let articlesList = articles?.data?.data

    return ( <div id="informations">
        <h1>Les articles récents</h1>
        <CssBaseline/>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        {articlesList && articlesList.map(article => (
            <Grid item key={article.id}  md={4} xs={12}>
                <CardBlog   article={article}/>
            </Grid>
            
        ))}
        </Grid>
    </div> );
}
 
export default BlogArticlesListe;