import { useSelector } from "react-redux";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";

const AnnonceLineShow = () => {
    let { data: articles } = useFetchDataWithPagination("annonces");
    const getResumeInfo = (strInputCode) => {
        let cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");

        cleanText = cleanText.replace(/&nbsp;/gi, " ");
        cleanText = cleanText.replace(/&amp;/gi, "&");
        cleanText = cleanText.replace(/&quot;/gi, '"');
        cleanText = cleanText.replace(/&#039;/gi, "'");
        cleanText = cleanText.replace(/&oelig;/gi, "oe");
        cleanText = cleanText.replace(/&#xfc;/gi, "ü");
        cleanText = cleanText.replace(/&#xdf;/gi, "ß");
        cleanText = cleanText.replace(/&auml;/gi, "ä");
        cleanText = cleanText.replace(/&ouml;/gi, "ö");
        cleanText = cleanText.replace(/&uuml;/gi, "ü");
        cleanText = cleanText.replace(/&Auml;/gi, "Ä");
        cleanText = cleanText.replace(/&Ouml;/gi, "Ö");
        cleanText = cleanText.replace(/&Uuml;/gi, "Ü");
        cleanText = cleanText.replace(/&szlig;/gi, "ß");
        
        return cleanText.substring(0, 300) + " ....";
    }
    const { currentLanguage } = useSelector((storeOf) => {
        return { currentLanguage: storeOf.nisys.currentLanguage };
      })
    
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
                    <h6 className="title-article">
                        {
                            currentLanguage.code === 'en'
                                ? (article.title_en ?? article.title ) : article.title
                      }
                    </h6>
                    <p style={{ textAlign: 'justify' }}>{
                        currentLanguage.code === 'en' ? getResumeInfo(article.body_en ?? article.body) : getResumeInfo(article.body)      
                    }
                    
                    </p>
                    <div style={{ textAlign: "right"}}>
                        <a href={`/annonce-communique/${article.id}`} className="btn btn-link">
                        {currentLanguage.code === 'en' ? "Read More" : "Lire plus"}
                        </a>
                    </div>
                </div>
            </div>

        })}
    </div>);
}
 
export default AnnonceLineShow;