import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Constants from '../../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Box } from '@mui/material';
import { User } from '../../../types/User';

interface UserMenuProps {
  user: User | null;
  anchorElUser: HTMLElement | null;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, anchorElUser, handleOpenUserMenu, handleCloseUserMenu }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
    navigate('/auth/login');
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {user ? (
        <>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user.username || 'User'} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {Constants.SETTINGS.map((setting) => (
              <MenuItem key={setting.path} onClick={setting.label === 'Logout' ? handleLogout : handleCloseUserMenu}>
                <Typography textAlign="center">{setting.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <MenuItem onClick={() => navigate('/auth/login')}>
          <Typography textAlign="center">Connexion</Typography>
        </MenuItem>
      )}
    </Box>
  );
};

export default UserMenu;
