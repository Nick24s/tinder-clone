import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ImageAvatars(props) {
  console.log(props);
  return (
   
      <Avatar
        alt="Remy Sharp"
        src= {props.src}
        sx={{ width: 38, height: 38 }}
        key={props.message}
      />
    // </Stack>
  );
}