
import { useState } from "react";
import { useEffect } from "react";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import Admin from "../../Admin";

const UserMembre = () => {
    const { data: users, error, paginate, isLoading } = useFetchDataWithPagination('get_user_instution')
    
    const [listUser, setListUser] = useState(null)

    useEffect(() => {
        if (users?.data) {
            setListUser(users?.data.data)
        }
      return () => {
        
      }
    }, [users])
    
    return (<Admin>
        {isLoading && <p>Loading .........</p>}
        {error && JSON.stringify(error)}

        <div className="row">
            <div className="offset-md-5 col-md-6">
                <input type="text" className="form-control" placeholder="Numero Matricule"/>
            </div>

            <div className="col-md-1">
                <button className="btn btn-block btn-primary">Ok</button>
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
                            <button>Change de Mot de passe</button>
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