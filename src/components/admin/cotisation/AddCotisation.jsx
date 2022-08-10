import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCotisationAfilier from '../../../Pages/Admin/contisation/AddCotisationAfilier';
import AddCotisationDetache from './AddCotisationDetache';
import OnLineDecleration from './OnLineDecleration';
import MeDeclarationComponent from './MeDeclarationComponent';
import useGetConnectedUser from "../../../utility/useGetConnectedUser";
import DisplayCotisation from './DisplayCotisation';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {userConnected} = useGetConnectedUser();
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example">
          {userConnected.isAdmin() && (
            <>
              <Tab label="publications des donnees des affilies" onClick={() => setValue(0)} />
              <Tab label="publications des donnees des detaches" onClick={() =>  setValue(1)} />
              <Tab label="Donnees partagees" onClick={() =>  setValue(2)} />
            </>    
          )}
        
          <Tab label="Declaration des donnees pour les membres"  onClick={() =>  setValue(3)}  />
          <Tab label="Mes declarations" onClick={() =>  setValue(4)} />
        </Tabs>
       
      </Box>
      <Box>
      {userConnected.isAdmin() && (
        <>
          <TabPanel value={value} index={0}>
          <AddCotisationAfilier/>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <AddCotisationDetache/>
          </TabPanel>
        </>
      )}
      <TabPanel value={value} index={2}>
        <DisplayCotisation />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <OnLineDecleration/>
        
      </TabPanel>
      <TabPanel value={value} index={4}>
      <MeDeclarationComponent/>
        </TabPanel>
      
      </Box>
      
    </Box>
  );
}
