import { useEffect } from "react";
import { useState } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";

const InformationList = () => {
    const {data, refreshSearch}= useFetchDataWithPagination('informations')
   const {submitData}  = usePostData()
    
    const [informations, setInformations] = useState(null)
    
    useEffect(() => {
        if(data?.data){
            setInformations(data.data.data)
        }
    }, [data])
    
    const deleteELement = (el) => {
        const resp = window.confirm('Are you sure you want to delete')
        if(resp){
            submitData("informations/"+el , {}, 'DELETE');
            refreshSearch();
        }
        
    }
    return ( <>
        
    
        {informations  && 
            <div>
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
                            <button onClick={()=>deleteELement(inf.id)} className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>

              </div>
        }
            </> );
        }
        
        export default InformationList;