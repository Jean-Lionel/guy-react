import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import { useSelector } from 'react-redux';
import useFetchData from "../../utility/useFecthData";

const HomeAccueil = () => {
    
    const {data} = useFetchData('informations');
    const [article, setArticle] = useState("")
    const { currentLanguage } = useSelector((storeOf) => {
        return { currentLanguage: storeOf.nisys.currentLanguage };
    })
    useEffect(() => {
        if(data?.data){
            setArticle(data?.data?.data)
        }
    },[data])
    const body = {
        title: {
            fr: article?.title_fr,
            en: article?.title_en,
        },
        article: {
            fr: article?.description_fr,
            en: article?.description_en,
        }
    };   
    const getResumeInfo = (strInputCode) => {
    let cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");

    cleanText = cleanText.replaceAll("&nbsp;", " ");
    cleanText = cleanText.replaceAll("&amp;", "&");
    cleanText = cleanText.replaceAll("&quot;", '"');
    cleanText = cleanText.replaceAll("&#039;", "'");
    cleanText = cleanText.replaceAll("&oelig;", "oe");
    cleanText = cleanText.replaceAll("&#xfc;", "ü");
    cleanText = cleanText.replaceAll("&#xdf;", "ß");
    cleanText = cleanText.replaceAll("&auml;", "ä");
    cleanText = cleanText.replaceAll("&ouml;", "ö");
    cleanText = cleanText.replaceAll("&uuml;", "ü");
    cleanText = cleanText.replaceAll("&Auml;", "Ä");
    cleanText = cleanText.replaceAll("&Ouml;", "Ö");
    cleanText = cleanText.replaceAll("&Uuml;", "Ü");
    cleanText = cleanText.replaceAll("&szlig;", "ß");

    return cleanText.substring(0, 300) + " ....";
  };
    return (<Box>
        <main>
        <h4>Informations</h4>
        <div>
     
        {article.length &&
        article.map(element => (<div className="row">
     
        <div className="col-md-12">
                <h6 className="title-article">
                  {currentLanguage.code === "en"
                    ? element.title_en ?? element.title_fr
                    : element.title_fr}
                </h6>
                <p style={{ textAlign: "justify" }}>
                  {currentLanguage.code === "en"
                    ? getResumeInfo(element.description_en ?? element.description_fr)
                    : getResumeInfo(element.description_fr)}
                   
                </p>
                <div style={{ textAlign: "right" }}>
                  <a
                    href={`/annonce-informations/${element.id}`}
                    className="btn btn-link"
                  >
                    {currentLanguage.code === "en" ? "Read More" : "Lire plus"}
                  </a>
                </div>
              </div>
        
        </div>))
        }
        </div>
        </main>
        
        </Box>);
    }
    
    export default HomeAccueil;