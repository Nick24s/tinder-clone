import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './SideMenuMatchesMessages.module.css'
import Chats from './Chats';
import Matches from './Matches';



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
        <Box sx={{ p: 2 }}>
          <Typography component={'span'}>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SideMenuMachesMessages() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div style={{}}>
        <Box> 
         <Box>
             <Tabs
                sx={{background:"white", overflow:"hidden", position:"fixed", zIndex:"100", width:"24rem"}}
                TabIndicatorProps={{style: {background:'rgb(255,68,88)', height:"8%"}}}  
                value={value} onChange={handleChange} aria-label="Messages and maches menu">

                <Tab label={<span style={{ color: 'black', textTransform: "none", fontWeight: "800"}}>
                    Matches
                    </span>}{...a11yProps(0)} />
                <Tab label={<span style={{ color: 'black', textTransform: "none", fontWeight: "800"}}>
                    Messages
                </span>} {...a11yProps(1)} />
            </Tabs>
        </Box>
            <div className={styles.TabPanelContainer}>
                <TabPanel  value={value} index={0}>
                    <Matches/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Chats/>
            </TabPanel>
            </div> 
        </Box>

     </div>
  );
}
