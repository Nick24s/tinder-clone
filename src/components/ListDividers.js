import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
//   maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListDividers(props) {
  return ( 

    <List sx={style } component="nav" aria-label="mailbox folders" >
      <ListItem button>
        <ListItemText className='listItem' primary={props.primary} /><span className='span'>{props.secondary}</span> 
      </ListItem>
      <Divider />
    </List>
  );
}


