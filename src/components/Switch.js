import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[500],
 
    '&:hover': {
      backgroundColor: alpha(pink[500], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[500],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ColorSwitches() {
  return (
    <div>
      <GreenSwitch {...label} defaultChecked  />
    </div>
  );
}