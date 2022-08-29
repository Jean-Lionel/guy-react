
import { Link } from "react-router-dom"
import { Box, Avatar, LinearProgress } from "@mui/material";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";


const ArticleList = () => {
    let { data: articles, isLoading, error, refreshSearch, paginate } = useFetchDataWithPagination("articles");
    let articlesList = articles?.data?.data
    const { submitData } = usePostData()

    const deleteArcticle = (id) => {
        const r = window.confirm("Vous êtes sur de supprimer cet article")

        if (r) {
            submitData("articles/" + id, null, 'DELETE')
            refreshSearch()
        }
    }




    return (
        <Box

            sx={{
                width: "90%",
                margin: "auto",

            }}

        >
            <h1>
                Liste des articles
            </h1>
            <Link to="/admin-article-add">
                <p>
                    Ajouter un Article
                </p>
            </Link>
            {isLoading && (
                <LinearProgress />
            )}

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                Titre
                            </th>
                            <th>
                                Date de création
                            </th>

                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {articlesList && articlesList.map((article, index) => (
                            true && <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <Avatar
                                        alt={article.title}
                                        src={article.image_source_url}
                                        sx={{ width: 100, height: 100 }}
                                    />

                                </td>
                                <td>{article.title}</td>
                                <td>{new Date(article.created_at).toLocaleString()}</td>

                                <td>
                                    <button className="btn btn-danger" onClick={(e) => deleteArcticle(article.id)}>
                                        Supprimer
                                    </button>
                                    <Link to={"/admin/articles/" + article.id}>
                                        Afficher
                                    </Link>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>

                {paginate()}
            </div>

        </Box>
    );
}

export default ArticleList;