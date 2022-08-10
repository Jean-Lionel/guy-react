import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import useFetchData from '../../../utility/useFecthData';
import {Link} from "react-router-dom";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import useGetConnectedUser from '../../../utility/useGetConnectedUser';

const PrimarySearchAppBar = () => {
  const [unreadMessage, setUnreadMessage] = useState(0);
  const {data} =  useFetchData('unReadDeclaration');
  const message = useMemo(() => data?.data, [data]);
  
  const { userConnected } = useGetConnectedUser();

  useEffect(() => {
    setUnreadMessage(message)
  }, [message]);
  
  return ( <Box sx={{ 
    display: 'flex',
    marginRight: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.1rem',
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #e0e0e0',
    borderTop: '1px solid #e0e0e0',
    borderLeft: '1px solid #e0e0e0',
    borderRight: '1px solid #e0e0e0',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)',
    borderRadius: '0.5rem',

  }}>
    
    {  (userConnected.isAdmin() ||userConnected.isRisqueProfessionnel()) && 
    <Link to="/ricieved-message">
    <Badge  
        sx={{
          cursor: 'pointer',
          marginRight: '5px',
          display: 'block',
          padding: '2px',
          '&:hover': {
            backgroundColor: 'rgba(255,40,0,0.8)'
          }
        }}
     badgeContent={unreadMessage?.web_declaration} color="success">
        <MailIcon color="action" />
    </Badge>

      </Link>}
    
    { (userConnected.isAdmin() || userConnected.isChefRecouvrement()) && 
      <Link to="/ricieved-declaration">

      <Badge  
          sx={{
            cursor: 'pointer',
            marginRight: '15px',
            display: 'block',
            padding: '2px',
            '&:hover': {
              backgroundColor: 'rgba(255,40,0,0.8)'
            }
          }}
       badgeContent={unreadMessage?.instution_declaration } color="success">
  
          <LocationCityIcon color="action" />
      </Badge>
  
      </Link>
     
    
    }
   
    
  </Box> );
}
 
export default PrimarySearchAppBar;