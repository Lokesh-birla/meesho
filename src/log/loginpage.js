import React, { useState } from 'react'
import '../App.css'
import {Paper} from '@material-ui/core';
import {Tabs} from '@material-ui/core';
import {Tab} from '@material-ui/core';
import {Tabpanel} from '@material-ui/core';
import Registrar from './Registrar'
import Login from './login';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
function Loginpage() {
const [value,setValue]=useState(0);
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
  <>
  <Paper square className='formlog w-lg-50'>
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example">
    <Tab label="Log in" />
    <Tab label="Registrar" />
  </Tabs>
  <TabPanel value={value} index={1}>
  <Registrar />
      </TabPanel>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
</Paper>
  </>
  )
}

export default Loginpage;