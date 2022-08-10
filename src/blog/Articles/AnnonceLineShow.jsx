import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";

const AnnonceLineShow = () => {
    let { data: articles } = useFetchDataWithPagination("annonces");

    const getResumeInfo = (strInputCode) => {
        const cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
        
        return cleanText.substring(0, 300) + " ....";
    }
    
    let articlesList = articles?.data?.data

    return (<div>
        <h5>Annonces & Cmmuniqués</h5>
        {articlesList && articlesList.map(article => {
            return <div key={article.id} className="row mb-1">
                <div className="col-md-3">
                {article.image && (
                    
                    <img src={article.image_source_url} alt={article.title}  className="img-responsive img-fluid"/>

                    )}
                 </div>
                
                <div className={article.image? 'col-md-9' : 'col-md-12' }>
                <h6 className="title-article">{article.title}</h6>
                    <p style={{ textAlign: 'justify' }}>{getResumeInfo(article.body)}</p>
                    <div style={{ textAlign: "right"}}>
                        <a href={`/annonce-communique/${article.id}`} className="btn btn-link">Lire plus</a>
                    </div>
                </div>
            </div>

        })}
    </div>);
}
 
export default AnnonceLineShow;