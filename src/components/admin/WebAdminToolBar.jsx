import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BackGroundImage from './web/BackGroundImage';
import AdmnistrationWeb from '../../blog/components/AdmnistrationWeb';
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

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function WebAdminToolBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example">
                <Tab label="admnistration" onClick={() => setValue(0)}/>
                <Tab label="Photo" onClick={() =>  setValue(1)} />
        </Tabs>
      </Box>
        <Box>
          <TabPanel value={value} index={0}>
            <AdmnistrationWeb/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <BackGroundImage />
          </TabPanel>
        </Box> 
    </Box>
  );
}
