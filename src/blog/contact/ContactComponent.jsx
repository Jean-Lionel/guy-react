import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import useFetchData from "../../utility/useFecthData";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const ContactComponent = () => {
    const { data: cotactData, isLoading } = useFetchData("contacts");
    const [contacts, setContacts] = useState(null)
    useEffect(() => {
        if (cotactData?.data) {
            setContacts(cotactData?.data.data);
        }
      return () => {
        
      }
    }, [cotactData])
    
    
    return (<div>
        { isLoading && <p>Waiting ...........</p>}
        <h1 className="text-center">Pour contacter ONPR</h1>
        <List>
            {contacts && contacts.map(contact => (
                <ListItem disablePadding>
                    
                    <ListItemButton>
                        <TouchAppIcon/>
                        <ArrowForwardIcon/>
                        <span> {contact.title_en}   </span>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary={contact.content_en} />
                    </ListItemButton>
          </ListItem>
                
            ))}
          
          
        </List>
    </div>);
}
 
export default ContactComponent;