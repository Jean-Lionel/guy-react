import { useEffect, useState } from "react";

const useGetConnectedUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const u = localStorage.getItem("user");
        if (u) {
            setUser(JSON.parse(u));
        }
        return {

        }
    }, []);

    const userConnected = {
        
        isAdmin: () => (user?.role.name === "ADMINISTRATEUR"),
        isRisqueProfessionnel: () => (user?.role.name === "RISQUE PROFESSIONELLE"),
        isEmployeur: () => (user?.role.name === "EMPLOYEUR"),
        isWebAdministrator: () => (user?.role.name === "ADMINISTRATEUR WEB"),
        isChefRecouvrement: () => (user?.role.name === "CHEF RECOUVREMENT"),
        user:  user,
    }

    return { 
        userConnected
    };
}
 
export default useGetConnectedUser;