import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import SearchBar from "../../../components/admin/component/SearchBar";
import CardDeclaration from "../../../components/admin/Declaration/CardDeclaration";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import useGetConnectedUser from "../../../utility/useGetConnectedUser";
import Admin from "../../Admin";

const RicievedDeclaration = () => {
    const {data, error, isLoading, paginate, searchIntoDatabase, filterData} = useFetchDataWithPagination("online_declaration_detaches");
    const [declarations, setdeclaration] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    let declarationsAll = filterData(searchQuery, data?.data?.data);
    //const { userConnected } = useGetConnectedUser();
    useEffect(() => {
        if (declarationsAll) {
            setdeclaration(declarationsAll)
        }
        return {
            setdeclaration: null
        }
    }, [declarationsAll]);

    const updateSearch = (e) => {
        e.preventDefault();
        if(searchQuery === "") {
            //Recuperer tout les données
            searchIntoDatabase("declarations/search/ALL_DATA");
        }else{
            searchIntoDatabase("declarations/search/" + searchQuery );
        }
        
    }
    
    return ( <Admin>
         <Box sx={{
             margin : {md: "0 60px 0 60px", xs: "0 5px 0 5px"},
         }}>
         {isLoading && <LinearProgress color="success" />}  
         {error && <p>Error: {error.message}</p>}
            
            <div className="row mt-2">
                <div className="col-md-9">
                <h4>
                     <u>Déclaration des instutions</u>
                </h4>
                </div>
                <div className="col-md-3">
                <SearchBar setSearchQuery={setSearchQuery} handleSubmit={updateSearch} />
                </div>
            </div>

            <Box>
                {declarations && declarations.map(declaration => (
                    <Box key={declaration.id}>
                         <CardDeclaration declaration={declaration} />
                    <hr />
                    </Box>
                ))}
             </Box>
             {paginate()}
        </Box>
    </Admin> );
}
 
export default RicievedDeclaration;