
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import Admin from "../../Admin";

const UserMembre = () => {
    const { data: users , error, paginate} = useFetchDataWithPagination('get_user_instution')
    return (<Admin>
        <h1>Hello je suis en bonne santé</h1>

        {JSON.stringify(users)}
    </Admin>);
}
 
export default UserMembre;