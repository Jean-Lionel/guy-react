import { Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";
import InfoAdd from "./InfoAdd";

const InformationList = () => {
    const {data, refreshSearch, paginate} = useFetchDataWithPagination('informations')
   const {submitData}  = usePostData()
    
    const [informations, setInformations] = useState(null)
    const [showForm, setShowForm] = useState(false)
    
    useEffect(() => {
        if(data?.data){
            setInformations(data?.data.data)
        }
    }, [data])
    
    const deleteELement = (el) => {
        const resp = window.confirm('Are you sure you want to delete')
        if(resp){
            submitData("informations/"+el , {}, 'DELETE');
            refreshSearch();
        }
    }
    const showCreateForm = () => {
          refreshSearch();
        setShowForm(!showForm);
    }
    const finishSaving = (e) => {
        showCreateForm();
    }
    return ( <>
        
    <div className="offset-10 col-md-2">
                        <Button onClick={showCreateForm}>{ showForm ? 'Fermer' : 'Ajouter' }</Button>
        </div>
        {showForm && <InfoAdd isFinish={ finishSaving } />}
        {informations  && 
            <div>
                <div className="row">
                    
                </div>
                <table className="table table-striped" style={{textAlign: 'left'}}>
                    <thead>
                        <tr>
                        <th>Français</th>
                        <th>Anglais</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { informations.map(inf =><tr>
                            <td>{inf.title_fr}</td>
                            <td>{inf.title_en}</td>
                            <td>
                                <button onClick={() => deleteELement(inf.id)} className="btn btn-danger">Supprimer</button> 
                                <Button>Modifier</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                { paginate()}
              </div>
        }
            </> );
        }
        
        export default InformationList;