import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../redux/actions/usersActions';
import { ValidateRegistrationFields } from '../../utils';

const theme = createTheme();

export default function SignUp() {

  const dispatch = useDispatch();
  const hardCodedUsers = useSelector(state => state.usersData.present.usersData);

  const register = (email, pass, firstName, lastName) => {
    let UUID = CreateUUID();

    dispatch(registerAction(UUID, email, pass, firstName, ["https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"],
      `${firstName + lastName}`, "", "", "", [], [], [], []))
    alert('registration success , now you can log in')
  }

  const CreateUUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      // eslint-disable-next-line no-mixed-operators
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  const CheckIfUserExist = (email, pass, firstName, lastName) => {
    let userExist = false;
    hardCodedUsers.map(user => {
      if (user.email === email && user.pass === pass) {
        userExist = true;
      }
    })

    userExist ? alert('user already exists') : register(email, pass, firstName, lastName)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if (ValidateRegistrationFields(data.get('email'), data.get('firstName'), data.get('lastName'), data.get('password'))) {
      CheckIfUserExist(data.get('email'), data.get('password'), data.get('firstName'), data.get('lastName'));
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2, background: 'linear-gradient(90deg, rgba(253,46,111,1) 8%, rgba(255,92,57,1) 100%)' }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}