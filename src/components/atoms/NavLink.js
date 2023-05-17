import { Button, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ tooltip, href, children }) => {
  return (
    <Tooltip title={tooltip} arrow>
      <Link to={href}>
        <Button>{children}</Button>
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
