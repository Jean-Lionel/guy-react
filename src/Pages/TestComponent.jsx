import BasicTextFields from "../Test/Demo";
import useGetConnectedUser from "../utility/useGetConnectedUser";
import Admin from "./Admin";



const TestComponent = () => {
    const {userConnected} = useGetConnectedUser();
    return ( <Admin>
             
          <BasicTextFields/>
          {userConnected.isAdmin() && 
          <div>
              Bonjour
          </div>}


    </Admin> );
}
 
export default TestComponent;