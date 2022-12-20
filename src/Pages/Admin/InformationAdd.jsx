import InfoAdd from "../../components/admin/information/InfoAdd";
import InformationList from "../../components/admin/information/InformationList";
import Admin from "../Admin";

const InformationAdd = () => {
    
    return ( <Admin>
                <h1>Information</h1>
                <InfoAdd/>
                <InformationList/>

        </Admin> );
}
 
export default InformationAdd;