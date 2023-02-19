import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import ContactCreate from "./ContactCreate";

const ContactList = () => {
    const { data: contacts, isLoading, error, paginate, searchIntoDatabase, refreshSearch } = useFetchDataWithPagination("contacts");
    
    const [contactList, setcontactList] = useState(null)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
      
        if (contacts?.data) {
            setcontactList(contacts.data.data)
        }
    
      return () => {
        
      }
    }, [contacts])

    const handleShowForm = () => {
        setShowForm(!showForm)
    }
    
    return (<Admin>
    <Box sx={{width : '99%',}}>
   
    <div className="row">
        <div className="col-md-10"> <h5>Contact List </h5></div>
        <div className="col-md-2">  <Button onClick={handleShowForm}>Ajouter un contact</Button></div>
    </div>
    {isLoading && <div>.... Chargement</div>}

    {showForm && <ContactCreate/>}
   
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Action&nbsp;(g)</TableCell>
          </TableRow>
            </TableHead>
            <TableBody>
                {contactList && contactList.map(contact => (
                    <TableRow>
                        <TableCell>XX</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
            </TableContainer>
     </Box>
    </Admin>);
}
 
export default ContactList;