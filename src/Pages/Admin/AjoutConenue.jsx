import Admin from "../Admin";
import { useParams} from "react-router";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";
import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import usePostData from "../../utility/usePostData";
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AjoutConenue = () => {
    const { id } = useParams();
    const { data, isLoading ,refreshSearch } = useFetchDataWithPagination("adminheades/" + id)
    const [groupe, setHeader] = useState(null);
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [elId, setElId] = useState(null)
    const {  submitData } = usePostData()
    
    useEffect(() => {
        if (data?.data) {
            setHeader(data?.data[0])
        }
        
        return () => {
            
        };
    }, [data]);

    const saveData = (e) => {
        e.preventDefault();
        const x = { title, description, admin_header_id: id };

        if (elId) {
            submitData("admin_contents/"+elId, x, "PUT")
        } else {
            submitData("admin_contents", x, "POST")
        }
        
        refreshSearch()
        setTitle("")
        setDescription("")
        setElId(null)
    }

    const removeElement = (e) => {
        const r = window.confirm('êtes-vous sûr ? ')

        if (r) {
            submitData("admin_contents/"+e , null, "DELETE");
            refreshSearch();
        }
    }

    const showElement = (e) => {
        setElId(e.id)
        setTitle(e.title)
        setDescription(e.description)

    }

    return (<Admin>
        {isLoading && <LinearProgress color="success" />}
        {
            groupe && <Box
                sx={{
                    width: '90%',
                    margin: 'auto',
                    }}>
                <h5>{groupe.title}</h5>
                <div className="row">
                    <div className="col-md-3">
                        <h6>Les sous menus</h6>
                        {groupe?.admin_contents && (<>
                            <ul className="list-group text-left">
                                {groupe?.admin_contents.map((x, i) => {
                                    return <li key={i} className="list-group-item d-flex space-between" >
                                     
                                        <span>   {x.title}</span>
                                        <span onClick={() => removeElement(x.id)} >
                                            <ClearIcon size="small" sx={{
                                                cursor: 'pointer',
                                                marginLeft: '2px',
                                                color: 'red'
                                        }} />
                                        </span>
                                        <span onClick={() => showElement(x)}
                                             
                                        >
                                            <VisibilityIcon sx={{
                                                cursor: 'pointer',
                                                marginLeft: '2px',
                                                color: 'green'
                                        }}
                                        />
                                        </span>
                                    </li>
                                })}
                            </ul>
                        </>)}
                    </div>
                    <div className="col-md-7">
                        <form action="" onSubmit={ saveData }>
                            <div className="form-group text-left">
                                <label htmlFor="title">Title</label>
                                <input required className="form-control form-control-sm" value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                            </div>
                            <div>
                                <label htmlFor="">Contenu</label>
                                <ReactQuill 
                                    theme="snow" value={description}
                                    onChange={setDescription}
                                
                                >
                                </ReactQuill>
                            </div>
                            <div className="mt-2 mb-2">
                                <button type="submit" className="btn btn-primary">Sauvegarder</button>
                            </div>
                        </form>
                    </div>
                </div>

            </Box>
        }

    </Admin> );
}
 
export default AjoutConenue;