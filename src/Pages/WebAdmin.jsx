import WebAdminToolBar from "../components/admin/WebAdminToolBar";
import Admin from "./Admin";

const WebAdmin = (props) => {
    return ( <Admin>
                <WebAdminToolBar/>
                {props.children}
                
        </Admin> );
}
 
export default WebAdmin;