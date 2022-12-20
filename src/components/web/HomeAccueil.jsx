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
            setArticle(data?.data)
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
    
    return (<Box>
        <h1>  {body.title[currentLanguage.code]}</h1>
        <main style={{ textAlign: 'justify' }}>
       {article && 
        <ReactQuill
        value={body.article[currentLanguage.code]}
        readOnly= {true}
        modules = {{
            toolbar : false,
            
        }}
        
        />
        }
        </main>
        
        </Box>);
    }
    
    export default HomeAccueil;