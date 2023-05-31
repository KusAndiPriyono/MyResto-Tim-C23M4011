/* eslint-disable jsx-a11y/alt-text */
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut, FiMoon, FiSun } from 'react-icons/fi';
import PropTypes from 'prop-types';
import NavLink from 'components/atoms/NavLink';
import Token from 'api/token';
import axios from 'api/axios';

interface Props {
  isAuthenticated: boolean;
  username?: string;
}
const Header: React.FC<Props> = ({ isAuthenticated, username }) => {
  // const [colorScheme, setColorScheme] = useState('dark');
  // const [language, setLanguage] = useState('en');

  // const toggleColorScheme = () => {
  //   setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  // };

  // const toggleEnAndId = () => {
  //   setLanguage(language === 'en' ? 'id' : 'en');
  // };

  const navigate = useNavigate();
  return (
    <Box
      component='header'
      sx={{
        position: 'unset',
        top: '20px',
        left: '0px',
        padding: '16px',
        marginBottom: '16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px',
        rowGap: '16px',
        boxShadow: '0px 0px 100px 10px rgba(0,0,0,.1)',
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
          component={Link}
          to='/'
          sx={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            textDecoration: 'none',
            width: 'fit-content',
          }}
        >
          <img />
          <Typography
            component='h1'
            variant='h6'
            sx={{
              textDecoration: 'none',
              margin: 0,
            }}
          >
            My Resto
          </Typography>
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
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <Tooltip title='Toggle Color Scheme'>
            <IconButton color='default' size='large'>
              {'dark' ? <FiMoon /> : <FiSun />}
            </IconButton>
          </Tooltip>
          <Tooltip title='Toggle Language'>
            <IconButton color='default' size='large'>
              <img
                src={`/images/${'en' ? 'uk-flag' : 'id-flag'}.png`}
                width={20}
                height={20}
              />
            </IconButton>
          </Tooltip>
        </Box>
        {isAuthenticated && (
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              paddingLeft: '12px',
            }}
          >
            <Typography
              component='p'
              color={'dark' ? 'white' : 'dark'}
              variant='subtitle1'
              sx={{
                textDecoration: 'none',
                margin: 0,
              }}
            >
              {username}
            </Typography>
            <Tooltip title='Logout'>
              <IconButton
                color='default'
                onClick={() => {
                  // perform logout logic
                  navigate('/auth/login', { replace: true });
                  Token.removeToken();
                  axios.defaults.headers.common['Authorization'] = '';
                }}
                size='large'
              >
                <FiLogOut />
              </IconButton>
            </Tooltip>
          </Box>
        )}
      </Box>
    </Box>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  username: PropTypes.string,
};
export default Header;
