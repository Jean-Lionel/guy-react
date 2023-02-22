import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import useFetchData from "../../utility/useFecthData";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import './contact.css'

const ContactComponent = () => {
    const { data: cotactData, isLoading } = useFetchData("contacts");
    const [contacts, setContacts] = useState(null)

    const { currentLanguage } = useSelector((storeOf) => {
    return { currentLanguage: storeOf.nisys.currentLanguage };
  });

    useEffect(() => {
        if (cotactData?.data) {
            setContacts(cotactData?.data.data);
        }
      return () => {
        
      }
    }, [cotactData])
    
    
    return (<div>
        { isLoading && <p>Waiting ...........</p>}
        <h1 className="text-center">
            {currentLanguage.code === 'en' ? ' To contact ONPR'  :' Pour contacter ONPR' }
        
        </h1>
        <List>
            {contacts && contacts.map(contact => (
                <ListItem disablePadding>
                    <ListItemButton>
                        <TouchAppIcon/>
                        <ArrowForwardIcon/>
                        <span> 
                            {
                                currentLanguage.code === 'en' ? 
                            contact.title_en :  contact.title_fr}   </span>
                    </ListItemButton>
                    
                     
                    <ReactQuill
                      value={
                        currentLanguage.code === "en"
                          ? contact.content_en 
                            ?  contact.content_en
                            : contact.content_fr
                          : contact.content_fr
                      }
                      readOnly={true}
                      modules={{
                        toolbar: false,
                      }}
                    />
                   
          </ListItem>
                
            ))}
          
          
        </List>
    </div>);
}
 
export default ContactComponent;