import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useParams } from "react-router-dom";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";
import Admin from "../Admin";

const ShowDetailArticle = () => {
    const { id } = useParams();
    const { data } = useFetchDataWithPagination("articles/" + id);

    const [artcle, setArtcle] = useState();

    useEffect(() => {
        if (data?.data) {
            setArtcle(data?.data)
        }

    },[data])
    
    return (<Admin>
        {artcle && 
            <div className="row">
            <div className="col-md-6">
                <h6>La versions Française </h6>

                    <h5>Titre : {artcle.title} </h5>

                    <ReactQuill
                        theme="snow" value={artcle.body}
                        readOnly={true}

                    >
            </ReactQuill>
                    
                   
            </div>
            <div className="col-md-6">
                <h6>
                    English Version
                </h6>
                    <h5>Title : {artcle.title_en}</h5>
                    <ReactQuill
                        theme="snow" value={artcle.body_en}
                        readOnly={true}    >
                    </ReactQuill>

            </div>
        </div>
        
        }

        

    </Admin> );
}
 
export default ShowDetailArticle;