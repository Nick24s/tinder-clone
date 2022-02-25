import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/usersActions';
import { ValidateLoginFields } from '../../utils';

const theme = createTheme();


export default function LoginForm() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersData.usersData);
  // const registeredUsers = useSelector(state => state.usersData.registeredUsers);


  const login = (userId) => {
    dispatch(loginAction(userId));
    
  }

  const matchUserParams = (email, pass) => {
    let hasValidUser = false;
    let userId = '';
    users.forEach(element => {
      if (element.email === email && element.pass === pass) {
        hasValidUser = true;
        userId = element.ID;
      }
    })
    hasValidUser ? login(userId) : alert('wrong username or password!')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(ValidateLoginFields(data.get('email'), data.get('password'))){
      matchUserParams(data.get('email'), data.get('password'));
    }


  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2, background: 'linear-gradient(90deg, rgba(253,46,111,1) 8%, rgba(255,92,57,1) 100%)' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}