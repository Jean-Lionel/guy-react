import { Box } from "@mui/material";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const InformationList = () => {
    const {data, refreshSearch} =useFetchDataWithPagination("informations");
    const {submitData, finished} = usePostData()

    useEffect(() => {
        refreshSearch()
      return () => {
       
      }
    }, [finished,refreshSearch,data])
    

    const deleteElement = (elem) => {
        const resp = window.confirm("Are you sure you want to delete")
        if(resp){
            submitData('informations/'+elem ,null, 'DELETE');
            refreshSearch()
        }
    }
    return (<Box
            sx={{ 
                 width: "95%",
                margin: "auto", 
            }}
        >
        {data && <Box 
        sx={{

        }}
        >
            <div className="row">
            <div className="col-6">
            <h4>{data.data.title_fr}</h4>
            <ReactQuill
            value={data.data.description_fr}
            readOnly={true}
            theme={"bubble"}
            ></ReactQuill>
            <p>Français</p>
            </div>
            <div className="col-6">
             <h4>{data.data.title_en}</h4>
            <ReactQuill
            value={data.data.description_en}
            readOnly={true}
            theme={"bubble"}
            ></ReactQuill>
            <p>Anglais</p>
            </div>
            </div>
            <button className="btn btn-danger" onClick={() => deleteElement(data.data.id)} >Supprimer</button>
            </Box>}
            
            </Box>  );
        }
        
        export default InformationList;