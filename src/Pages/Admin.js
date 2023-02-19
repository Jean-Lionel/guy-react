import AdminFooter from "../components/admin/AdminFooter";
//import AdminHeader from "../components/admin/AdminHeader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from "../components/admin/AppBar";
import { Box } from "@mui/material";

const Admin = (props) => {
    return ( <Box sx={{width: '100%', overflow: 'hidden'}}>
        <ResponsiveAppBar/>
          <ToastContainer/>
          {props.children}
        <AdminFooter/>  
    </Box> );
}
 
export default Admin;