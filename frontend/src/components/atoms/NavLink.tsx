import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

interface Props {
  tooltip: string;
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ tooltip, href, children }) => {
  const { pathname } = useLocation();

  return (
    <Tooltip title={tooltip} arrow>
      <Link to={href}>
        <Button variant={pathname === href ? 'text' : 'contained'}>
          {children}
        </Button>
      </Link>
    </Tooltip>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};
export default NavLink;
