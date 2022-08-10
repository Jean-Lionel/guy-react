import { Box, Divider, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import SearchBar from "../components/admin/component/SearchBar";
import CardMessage from "../components/admin/Declaration/CardMessage";
import useFetchDataWithPagination from "../utility/useFetchDataWithPagination";
import useGetConnectedUser from "../utility/useGetConnectedUser";
import Admin from "./Admin";

const RicievedMessage = () => {
    const {data, error, isLoading , paginate,  searchIntoDatabase, filterData } = useFetchDataWithPagination("declarations")
     const [unreadMessages, setUnreadMessages] = useState([]);
    const [readMessages, setReadMessages] = useState([])
    const { userConnected } = useGetConnectedUser();
    const [searchQuery, setSearchQuery] = useState("");
    const listMessage = filterData(searchQuery,data?.data?.data);
     useEffect(() => {
        if(listMessage){
            setUnreadMessages(listMessage.filter(message => message.is_opened === 0))
            setReadMessages(listMessage.filter(message => message.is_opened === 1))
        }
     }, [listMessage])
    
     const updateSearch = (e) => {
        e.preventDefault();
        if(searchQuery === "") {
            //Recuperer tout les données
            searchIntoDatabase("declarations/search/ALL_DATA");
        }else{
            searchIntoDatabase("declarations/search/" + searchQuery );
        }
        
    }

    return ( 
        <Admin>
           
            {isLoading && <LinearProgress color="success" />}  
            {error && <p>Error: {error?.message}</p>}

            {( userConnected?.isAdmin() || userConnected?.isRisqueProfessionnel()) && <>
                <h5>
                Déclaration en ligne
                </h5>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-3">
                        <SearchBar setSearchQuery={setSearchQuery}  handleSubmit={updateSearch} />
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
                <Box sx={{
                    width: "95%",
                    margin: "auto",
            }}>
                {unreadMessages && unreadMessages.map(message => (
                    <Box key={message.id}>
                        <CardMessage message={message}/>
                        <Divider />
                    </Box>
                ))}

            {readMessages && readMessages.map(message => (
                  <Box key={message.id}>
                      <CardMessage message={message}/>
                      <Divider />
                  </Box>
              ))}
            </Box>
            {paginate()}
            
            </>}
           
        </Admin> 
    );
}
 
export default RicievedMessage;