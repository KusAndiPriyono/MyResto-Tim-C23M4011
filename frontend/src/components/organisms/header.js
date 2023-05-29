import {
  AppBar,
  Box,
  Container,
  Menu,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
} from '@mui/material';
import React from 'react';
import RestoIcon from '@mui/icons-material/Restaurant';
import NavLink from '../atoms/NavLink';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'white' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <RestoIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            My Resto
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='black'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <NavLink tooltip='Ke Home' href='/'>
                  Home
                </NavLink>
                <NavLink tooltip='ke Menu' href='/menu'>
                  Menu
                </NavLink>
                <NavLink tooltip='Booking' href='/booking'>
                  Booking Resto
                </NavLink>
                <NavLink tooltip='contact' href='/contact'>
                  Contact Us
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>

          <RestoIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }}
          />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            My Resto
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <NavLink tooltip='Ke Home' href='/'>
              Home
            </NavLink>
            <NavLink tooltip='ke Menu' href='/menu'>
              Menu
            </NavLink>
            <NavLink tooltip='Booking' href='/booking'>
              Booking Resto
            </NavLink>
            <NavLink tooltip='contact' href='/contact'>
              Contact Us
            </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='./logo192.png' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={handleCloseUserMenu}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <NavLink tooltip='Profile' href='/profile'>
                  Profile
                </NavLink>
                <NavLink tooltip='Dashboard' href='/dashboard'>
                  Dashboard
                </NavLink>
                <NavLink tooltip='Login' href='/auth/login'>
                  Login
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
