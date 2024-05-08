// built-ins
import React from 'react';

// material ui components
import AppBar from '@mui/material/AppBar';

import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// enums
import Routes from '~constants/routes.enum';

// svgs
import { ReactComponent as ViteLogo } from '~assets/vite.svg';
import Button from '@mui/material/Button';
import { logout } from 'src/services/authService';
import { notification } from 'src/services/config'
import { useNavigate } from 'react-router-dom';
import { actions } from '~features/Auth';
import { useAppDispatch } from '~configs/store/hooks';
import { toast } from 'react-toastify';


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout();
    dispatch(actions.setAuthenticated(false));
    dispatch(actions.setUser(null));
    toast.success("Logout Successfully !", notification)
    navigate('/login');
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar variant="dense" disableGutters>
          <Icon sx={{ display: 'flex', mr: 1 }} className="me-4" component={ViteLogo as React.ElementType} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={Routes.APPLICATION}
            sx={{
              color: 'inherit',
              display: 'flex',
              flexGrow: 1,
              mr: 2,
              textDecoration: 'none',
            }}
          >
            easyGenerator Task
          </Typography>
          <Button variant="outlined" color="inherit" className="ml-2" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
