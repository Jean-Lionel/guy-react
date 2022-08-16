import { useSelector } from "react-redux";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";

const ArticleInlineShow = () => {
    let { data: articles, paginate } = useFetchDataWithPagination("articles");

    const { currentLanguage } = useSelector((storeOf) => {
        return { currentLanguage: storeOf.nisys.currentLanguage };
      })
    

    const getResumeInfo = (strInputCode) => {
        const cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
         return cleanText.substring(0, 300) + " ....";
    }
    
    let articlesList = articles?.data?.data

    return (<div>
   
        {articlesList && articlesList.map(article => {
            return <div key={article.id} className="row mb-1">
                <div className="col-md-3">
                {article.image && ( 
                    <img src={article.image_source_url} alt={article.title}  className="img-responsive img-fluid"/>
                    )}
                 </div>
                
                <div className={article.image? 'col-md-9' : 'col-md-12' }>
                    <h6 className="title-article">
                    
                        {currentLanguage.code === 'en'
                            ? (article.title_en ?? article.title ) : article.title  
                        }
                    
                    </h6>
                    <p style={{ textAlign: 'justify' }}>{
                        currentLanguage.code === 'en' ?
                            getResumeInfo(article.body_en ? article.body_en : article.body) : 
                            getResumeInfo(article.body ? article.body : article.body_en)
                    }
                    </p>
                    <div style={{ textAlign: "right"}}>
                        <a href={`/detail/${article.id}`} className="btn btn-link">

                        {currentLanguage.code === 'en' ? "Read More" : "Lire plus"}
                            
                           </a>
                    </div>
                </div>
            </div>

        })}
        <div>{paginate()}</div>
    </div>);
}
 
export default ArticleInlineShow;