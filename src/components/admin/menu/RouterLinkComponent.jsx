import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RouterLinkComponent = ({route,handleCloseNavMenu}) => {
    return ( 
        <Link to={route.path} >
                    <p>
                      <Button
                      sx={{ my: 2, color: 'white', display: 'block' }}  
                      onClick={() => 
                        handleCloseNavMenu
                      }
                    >
                        {route.icon}
                    {route.name}
                    </Button>
                    </p>

         </Link>
     );
}
 
export default RouterLinkComponent;