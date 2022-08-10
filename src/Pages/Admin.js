import AdminFooter from "../components/admin/AdminFooter";
//import AdminHeader from "../components/admin/AdminHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from "../components/admin/AppBar";

const Admin = (props) => {
    return ( <div>
        <ResponsiveAppBar/>
          <ToastContainer/>
          {props.children}
        <AdminFooter/>  
    </div> );
}
 
export default Admin;