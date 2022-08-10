import {Box, Fab,Icon} from '@mui/material';
import { Link, useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import { useEffect } from 'react';
import usePostData from '../../../utility/usePostData';
import SearchBar from '../component/SearchBar';
import { useState } from 'react';

const ListUser = () => {
    let { data: users, isLoading, error, paginate , refreshSearch , searchIntoDatabase, filterData} = useFetchDataWithPagination("users");
    const {  submitData } = usePostData();
   // let listUser = users?.data?.data
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState("");
    let [listUser, setLlistUser] = useState(null);

    useEffect(() => {
        setLlistUser(filterData(searchQuery,users?.data?.data))
        return () => {
        };
    }, [filterData, searchQuery,users,paginate ]);

    const deleteUser = (id) => {
       
        const check = Math.random().toString(36).slice(2, 7);
        const response = window.prompt("Etes vous sûr ? Tapez : " + check)
        if (response === check) {
            submitData("/users/"+id,null,"DELETE")
            refreshSearch()
        }
    }

    const updateSearch = (e) => {
        e.preventDefault();
        if(searchQuery === "") {
            //Recuperer tout les données
            searchIntoDatabase("users/search/ALL_DATA");
        }else{
            searchIntoDatabase("users/search/" + searchQuery );
        }
        
    }
        
    return (<Box sx={{
        m: 1,
        width: "90%",
        margin: "auto"
    }}>
        <div>
        <h4>Liste des utilisateurs</h4>
            {isLoading && (
                <div>
                    {
                        isLoading
                    }
                </div>
            )}
            {error && (
                <span className="error-message"> {error}</span>
            )}
        </div>
       
        <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-4">
                <SearchBar setSearchQuery={setSearchQuery} handleSubmit={updateSearch} />
            </div>
            <div className="col-md-2">
                <Box sx={{
            textAlign: "right",
            marginRight: 2
                 }}>
             <Link to="admin-add-user">
                <Icon>add_circle</Icon> Ajouter un utilisateur
                </Link>
        </Box>
            </div>
        </div>
      
        <table className="table table-hover table-sm table-responsive">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nom et Prénom </th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Mobile</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                    listUser && listUser.map((user, index) => (

                        <tr key={index}>
                            {(user.role && !(user?.role.name.toLowerCase().includes('employeur'))) && (
                                
                                <>
                                <td>{user?.id}</td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.telephone}</td>
                                <td>{user?.mobile}</td>
                                <td>{user?.role?.name}</td>
                            
                                <td>
                                <Fab size="small" color="secondary" aria-label="edit"
                                            onClick={() => { history.push("edit-user/"+user.id) }} >
                                            <EditIcon />
                                    </Fab>
                                    <Fab size="small" color="primary" onClick={() => deleteUser(user?.id) } >
                                        <DesktopAccessDisabledIcon />
                                    </Fab>
                                </td>
                            </>

                            )}
                        </tr>
                    
                    
                ))
            }

            </tbody>
        </table>
       
        {paginate()}
        
    </Box> );
}
 
export default ListUser;