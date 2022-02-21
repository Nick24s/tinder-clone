import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function ImageAvatars(props) {
  return (
    // <Stack direction="row" spacing={2}>
    //   <Avatar
    //     alt="Remy Sharp"
    //     src="/static/images/avatar/1.jpg"
    //     sx={{ width: 24, height: 24 }}
    //   />
    //   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar
        alt="Remy Sharp"
        src= {props.src}
        // src="https://images-ssl.gotinder.com/5c61874d7cfa643d61e2c1dc/172x216_1fb233f9-3388-4a25-9bb3-52884d0d47b1.jpg"
        sx={{ width: 38, height: 38 }}
      />
    // </Stack>
  );
}