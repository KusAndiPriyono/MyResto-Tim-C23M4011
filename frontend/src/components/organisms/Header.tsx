/* eslint-disable jsx-a11y/alt-text */
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavLink from 'components/atoms/NavLink';
import Token from 'api/token';
import axios from 'api/axios';
import { useState } from 'react';

interface Props {
  isAuthenticated: boolean;
  name?: string;
  photo?: string;
  role?: string;
}

const Header: React.FC<Props> = ({ isAuthenticated, photo, role }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Box
        component='header'
        sx={{
          position: 'unset',
          top: '20px',
          left: '0px',
          background: '##EFF0FF',
          padding: '16px',
          marginBottom: '16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          rowGap: '16px',
          // boxShadow: '0px 0px 100px 10px rgba(0,0,0,.1)',
          '@media (min-width: 768px)': {
            flexWrap: 'nowrap',
            padding: '18px 24px',
            gap: '12px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              textDecoration: 'none',
              width: 'fit-content',
            }}
          >
            <img />
            {isAuthenticated && (
              <Typography
                component='h1'
                variant='h4'
                sx={{
                  textDecoration: 'none',
                  margin: 0,
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'Bold',
                  color: '#152A38',
                }}
              >
                🥗My Resto
              </Typography>
            )}
          </Box>
        </Box>
        {isAuthenticated && (
          <Box
            sx={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <NavLink href='/' tooltip='ke home'>
              Home
            </NavLink>
            <NavLink href='/booking' tooltip='ke booking'>
              Booking
            </NavLink>
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            flexBasis: isAuthenticated ? '100%' : 'unset',
            justifyContent: 'space-between',
            '@media (min-width: 768px)': {
              flexBasis: 'unset',
            },
          }}
        >
          {isAuthenticated && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open Settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src={photo}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px',
                    }}
                  />
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
                  onClick={() => {
                    // perform logout logic
                    navigate('/account', { replace: true });
                    // Token.getToken();
                    // axios.defaults.headers.common[
                    //   'Authorization'
                    // ] = `Bearer ${Token.getToken()}`;
                  }}
                >
                  Account
                </MenuItem>

                {role === 'admin' && (
                  <MenuItem
                    onClick={() => {
                      // perform logout logic
                      navigate('/dashboardAdmin', { replace: true });
                    }}
                  >
                    Dashboard
                  </MenuItem>
                )}

                <MenuItem
                  onClick={() => {
                    // perform logout logic
                    navigate('/auth/login', { replace: true });
                    Token.removeToken();
                    axios.defaults.headers.common['Authorization'] = '';
                  }}
                >
                  {Token.getToken() ? 'Log Out' : 'Log in'}
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  name: PropTypes.string,
  photo: PropTypes.string,
  role: PropTypes.string,
};
export default Header;
