import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/adminHeader.css"

const AdminHeader = () => {
    const [activeTab, setActiveTab] = useState("home");

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login";
    }
   
    return ( 
    <div className="header">
        <p className="logo">User Management System</p>
        <div className="header-right">
        <Link to="/" > 
            <p 
            className={`${ activeTab === "home" ? "active" : ""}`} 
            onClick={() => setActiveTab("home")}
            
            >Home</p>
        </Link>
        <Link to="/users"> 
            <p className={`${ activeTab === "users" ? "active" : ""}`}  onClick={() => setActiveTab("users")}>Users</p>
        </Link>
        <Link to="admin-article">
            <p className={`${ activeTab === "admin-article" ? "active" : ""}`}  onClick={() => setActiveTab("admin-article")}>Articles</p>
        </Link>
        <Link to="/about"> 
        <button onClick={() => logout()} className="">Déconnexion</button>
        </Link>
       
        </div>
        
    </div>
     );
}
 
export default AdminHeader;