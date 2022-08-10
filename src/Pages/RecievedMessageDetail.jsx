import useGetConnectedUser from "../utility/useGetConnectedUser";
import Admin from "./Admin";
import DetailMessage from "./Admin/message/DetailMessage";

const RecievedMessageDetail = () => {
    const {userConnected} = useGetConnectedUser();
    return (<Admin>

        {(userConnected?.isAdmin() || userConnected?.isRisqueProfessionnel()) && <DetailMessage />}
    </Admin> );
}
 
export default RecievedMessageDetail;