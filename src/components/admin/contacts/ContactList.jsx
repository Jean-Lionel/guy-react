import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Admin from "../../../Pages/Admin";
import useFetchDataWithPagination from "../../../utility/useFetchDataWithPagination";
import usePostData from "../../../utility/usePostData";
import ContactCreate from "./ContactCreate";

const ContactList = () => {
    const { data: contacts, isLoading, error, paginate, refreshSearch } = useFetchDataWithPagination("contacts");
    const { submitData } = usePostData();
    
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

    const finishSave = (x) => {
        setShowForm(!showForm)
        refreshSearch()
    }
    const deleteContact = (id) => {
        const confirm = window.confirm('Are you sure you want to delete ?')
        
        if (confirm) {
            submitData("contacts/" + id, null, "DELETE"); 
            refreshSearch()
        }
   }
    
    return (<Admin>
    <Box sx={{width : '99%',}}>
            {error && <div className="text-danger">{ JSON.stringify(error)}</div>}
    <div className="row">
        <div className="col-md-10"> <h5>Contact List </h5></div>
        <div className="col-md-2">  <Button onClick={handleShowForm}>Ajouter un contact</Button></div>
    </div>
    {isLoading && <div>.... Chargement</div>}

            {showForm && <ContactCreate setIsFinish={finishSave } />}
   
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell >Titre Fr</TableCell>
            <TableCell >Titre En</TableCell>
            <TableCell >Contenue Fr</TableCell>
            <TableCell >Continue En </TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
            </TableHead>
            <TableBody>
                {contactList && contactList.map(contact => (
                    <TableRow>
                        <TableCell>{contact.title_fr}</TableCell>
                        <TableCell>{contact.title_en}</TableCell>
                        <TableCell>{contact.content_fr}</TableCell>
                        <TableCell>{contact.content_en}</TableCell>
                        <TableCell>
                            <button onClick={() =>deleteContact(contact.id)}>Supprimer</button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
            </TableContainer>

            {paginate() }
     </Box>
    </Admin>);
}
 
export default ContactList;