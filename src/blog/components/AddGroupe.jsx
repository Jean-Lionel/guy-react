import { Box, Button, LinearProgress, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Admin from "../../Pages/Admin";
import useFetchDataWithPagination from "../../utility/useFetchDataWithPagination";
import usePostData from "../../utility/usePostData";
import {Link} from "react-router-dom";

const AddGroupe = () => {
    const [title, setTitle] = useState("");
    const [isStraduction, setIsStraduction] = useState(false)
    const [selectElement, setSelectElement] = useState(0);
    const [title_en, setTitle_en] = useState("")
    
    const { isLoading: saveLoading, finished, error, submitData } = usePostData();
    const { data, isLoading, refreshSearch } = useFetchDataWithPagination("adminheades");
    const [groupes, setGroupes] = useState(null);
    
    useEffect(() => {
        if ( finished) {
            setTitle("")
        }
        if (data?.data) {
            setGroupes(data?.data)
        }
    }, [finished, data])

    const openTraduction = (e) => {
        setIsStraduction(true);
        setSelectElement(e.id)
        setTitle_en("")
    }
    const addGroup = (e) => {
        e.preventDefault();
        const x = { title: title };
        submitData("adminheades", x, "POST");
        refreshSearch();
    }
    
    const deleteTitle = (e) => {
        const response = window.confirm("Vous êtes sûr ")
        if (response) {
            submitData("adminheades/" + e, null, "DELETE");  
            refreshSearch();
        }
    }
    
    const saveTraduction = (e) => {
        e.preventDefault();
        if(title_en.length > 0) {
              submitData("adminheadesTraduction", {
                title_en: title_en,
                element_id : selectElement
              });  
               refreshSearch();
               setTitle_en("")
               setIsStraduction(false);
              setSelectElement(0)
        }
    }
    return (<Admin>
        <h6>Ajout un titre</h6>
        <Box sx={{
            width: "80%",
            margin: "auto",
        }}>
        <form action="" >
        <div className="row">
        <div className="col-md-2">
        <label htmlFor="" ></label>
        </div>
        <div className="col-md-6">
        <input type="text" id="title"
        className="col-md-5 form-control form-control-sm"
        placeholder="Title"
        value={title}
        onChange={(e) =>setTitle(e.target.value)}
        />
        {error && <div className="alert alert-danger">{JSON.stringify(error.message)}</div>}
        </div>
        
        <div className="col-md-2">
        <button  type="submit" onClick={ addGroup}>Ajouter</button>
        </div>           
        </div>
        {saveLoading && <LinearProgress color="success" />}
        </form>
        
        {isLoading && <LinearProgress color="success" />}
        {groupes && (
            <Box>
            <table className="table-responsive table table-striped table-sm">
            <thead className="black">
            <tr>
            <th>
            #
            </th>
            <th>
            Titre en Français
            </th>
            <th>
            Titre en Anglais
            </th>
            <th>
            Action
            </th>
            </tr>
            </thead>
            <tbody>
            {groupes.map((e, id) => (
                <>
                <tr>
                <td>{ id +1}</td>
                <td style={{textAlign: 'left'}}>{e.title}</td>
                <td>{e.title_en}</td>
                <td>
                <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => deleteTitle(e.id)}>Supprimer</Button>
                
                <Button variant="text"> <Link to={ `ajouter-contenu/${e.id}`}>Ajouter  du contenu</Link></Button>
                
                <Button variant="contained" onClick={() => openTraduction(e)} >Traduction en anglais</Button>
                </Stack>
                </td>
                </tr>
                
                {isStraduction && (e.id === selectElement)  && 
                    <tr>
                    <td colSpan="3">
                    <TextField value={title_en} onChange={(e) => setTitle_en(e.target.value)}  fullWidth  id="standard-basic" label="Traduire en Anglais" variant="standard" />
                    <Button variant="text" onClick={(e) =>saveTraduction(e)}>Enregistrer</Button>
                    </td>
                    
                    </tr>
                }
                
                </>
                ))}
                
                </tbody>
                </table>
                </Box>
                ) }
                </Box>
                
                </Admin> );
            }
            
            export default AddGroupe;