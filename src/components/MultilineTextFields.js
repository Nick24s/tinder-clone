import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function MultilineTextFields(props) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '375px' , backgroundColor : 'white' , },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      
        <TextField
          // onChange={props.onChange}
          id="standard-multiline-static"
          multiline={true}
          minRows={props.minRows}
          maxRows={props.maxRows}
          inputProps={{ maxLength:props.maxLength }}
          defaultValue={props.defaultValue}
          variant={props.variant}
          color='error'
          placeholder={props.placeholder}
        />
      </div>
    </Box>
  );
}