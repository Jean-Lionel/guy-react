import Admin from "../Admin";
import { useParams} from "react-router";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";
import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import usePostData from "../../utility/usePostData";
import ClearIcon from '@mui/icons-material/Clear';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { EditLocation } from "@mui/icons-material";

const AjoutConenue = () => {
    const { id } = useParams();
    const { data, isLoading ,refreshSearch } = useFetchDataWithPagination("adminheades/" + id)
    const [groupe, setHeader] = useState(null);
    const [description, setDescription] = useState("")
    const [description_en, setDescription_en] = useState("")
    const [title, setTitle] = useState("")
    const [elId, setElId] = useState(null)
    const {  submitData } = usePostData();

    const [title_en, setTitle_en] = useState("")
    const [selectElement, setSelectElement] = useState(0)

    useEffect(() => {
        if (data?.data) {
            setHeader(data?.data[0])
        }
        return () => {
            
        };
    }, [data]);

    const saveData = (e) => {
        e.preventDefault();
        const x = { title, description, admin_header_id: id, description_en, title_en };

        if (elId) {
            submitData("admin_contents/"+elId, x, "PUT")
        } else {
            submitData("admin_contents", x, "POST")
        }
        
        refreshSearch()
        setTitle("")
        setDescription("")
        setElId(null)
        setDescription_en("")
        setTitle_en("")
    }

    const removeElement = (e) => {
        const r = window.confirm('êtes-vous sûr ? ')

        if (r) {
            submitData("admin_contents/"+e , null, "DELETE");
            refreshSearch();
        }
    }

    const showElement = (e) => {
        setTitle_en(e.title_en || "")
        setElId(e.id)
        setTitle(e.title)
        setDescription(e.description)
        setDescription_en(e.description_en)        
    }

    const saveTraduction = (e) => {
         submitData("admin_contents_translate", {
            element_id: selectElement,
            content_en : title_en
        })
        setSelectElement(0)
        setTitle_en("");
        refreshSearch();
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
                                    return <li key={i} className="list-group-item" >
                                    <div style={{
                                        textAlign: "left",
                                    }}>
                                    <div><small>FR:</small>   {x.title}</div>
                                       <hr />
                                    <div><small>EN:</small>   {x?.title_en ?? ""}</div>
                                    </div>
                                    <div  style={{
                                        textAlign: "right",
                                    }}>
                                        <span title="Supprimer" onClick={() => removeElement(x.id)} >
                                            <ClearIcon size="small" sx={{
                                                cursor: 'pointer',
                                                marginLeft: '2px',
                                                color: 'red'
                                        }} />
                                        </span>
                                        {/* <span title="Traduire en Anglais" onClick={() =>translateEnglish(x)}>
                                         <EditLocation size="small" sx={{
                                                cursor: 'pointer',
                                                marginLeft: '2px',
                                                color: 'green'
                                        }} />
                                        </span> */}
                                        <span title="Afficher" onClick={() => showElement(x)}>
                                            <VisibilityIcon sx={{
                                                cursor: 'pointer',
                                                marginLeft: '2px',
                                                color: 'green'
                                        }}
                                        />
                                        </span>
                                        </div>

                                        {selectElement === x.id && <div>
                                        <p>
                                        <input type="text" value={ title_en || x.title_en  } onChange={(e) => setTitle_en(e.target.value) } />
                                        <button onClick={() => saveTraduction(x.id)}>Enregistrer</button>
                                        </p>
                                        </div>}
                                        
                                    </li>
                                })}
                            </ul>
                        </>)}
                    </div>
                    <div className="col-md-7">
                        <form action="" onSubmit={ saveData }>
                            <div className="form-group text-left">
                                <label htmlFor="title">Title Fr</label>
                                <input required className="form-control form-control-sm" value={title} onChange={(e) => setTitle(e.target.value)} ></input>
                            </div>
                            <div className="form-group text-left">
                                <label htmlFor="title">Title en Angalis</label>
                                <input required className="form-control form-control-sm" value={title_en} onChange={(e) => setTitle_en(e.target.value)} ></input>
                            </div>
                            <div>
                                <label htmlFor="">Contenu en Français</label>
                                <ReactQuill 
                                    theme="snow" value={description}
                                    onChange={setDescription}
                                >
                                </ReactQuill>
                            </div>
                            <div>
                                <label htmlFor="">Contenu en Anglais</label>
                                <ReactQuill 
                                    theme="snow" value={description_en}
                                    onChange={setDescription_en}
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