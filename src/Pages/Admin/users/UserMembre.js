
import { useState } from "react";
import { useEffect } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";
import Admin from "../../Admin";

const UserMembre = () => {
    const [matricule, setMatricule] = useState("")
    let { data: users, error, paginate, isLoading , refreshSearch ,searchIntoDatabase } = useFetchDataWithPagination('get_member'+ (matricule ? '/'+ matricule : ''))
    const { submitData } = usePostData()
    
    const [listUser, setListUser] = useState(null)
    const [selected_input, setSelected_input] = useState(-1)

    const [password, setPassword] = useState("")

    useEffect(() => {
        if (users?.data) {
            setListUser(users?.data.data)
        }
      return () => {
        
      }
    }, [users])


    const changePassword = () => { 
        if (!password) {
            alert('Please enter the new password')
        }
        submitData('change_user_password', {
            user_id: selected_input,
            password: password
        }, "POST");
        refreshSearch()

        setSelected_input(-1)
    }

    const search = () => {
        searchIntoDatabase()
    }
    
    return (<Admin>
        {isLoading && <p>Loading .........</p>}
        {error && JSON.stringify(error)}

        <div className="row">
            <div className="offset-md-5 col-md-6">
                <input type="text" className="form-control"
                    onChange={(e) =>setMatricule(e.target.value)}
                    placeholder="Numero Matricule" />
            </div>

            <div className="col-md-1">
                <button className="btn btn-block btn-primary" onClick={search} >Ok</button>
            </div>
        </div>

        <table className="table table-hover table-sm table-responsive ">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nom et Prénom </th>
                    <th>Téléphone</th>
                    <th>Matricule</th>
                    <th>Updated at</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               
                {
                    
                    listUser && listUser.map((user, index) => (

                        <tr key={index} style={{textAlign: 'left'}}>
                           
                                <td>{index + 1}</td>
                                <td >{user?.name}</td>
                                
                                <td >{user?.telephone}</td>
                                <td>
                                {user?.numero_matricule}
                            </td>
                            <td>{ user.updated_at?.split('T')[0] } à { user.updated_at?.split('T')[1].split('.')[0] }</td>
                            <td>
                               
                                {
                                    (selected_input === user.id) &&
                                    <>
                                        <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Change de Mot de passe" />
                                        <button onClick={changePassword}>Change</button>
                                    </>
                                }
                                {
                                    (selected_input !== user.id) &&
                                    <button onClick={() => setSelected_input(user.id)}>edit</button>
                                }
                            
                            </td>
                        </tr>
                    
                    
                ))
            }

            </tbody>
        </table>
       
        {paginate()}

        { paginate()}
    </Admin>);
}
 
export default UserMembre;