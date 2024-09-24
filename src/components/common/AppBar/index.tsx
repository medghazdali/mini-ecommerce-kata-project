import React, { useState } from 'react';
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShopIcon from '@mui/icons-material/Shop2TwoTone';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useCart } from '../../../features/cart/hooks/useCart';
import { ShoppingCart } from '@mui/icons-material';
import { Badge, Button } from '@mui/material';
import Constants from '../../../config/constants';
import NavMenu from '../Menu/NavMenu';
import UserMenu from '../Menu/UserMenu';
import Cart from '../../../features/cart/components/Cart';

const AppBar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { totalItems } = useCart();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartDrawer = (open: boolean) => {
    setIsCartOpen(open);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <>
      <AppBarMui position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              onClick={() => {
                navigate('/');
              }}
              sx={{ display: 'flex' }}
            >
              <ShopIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                KATA
              </Typography>
            </Box>

            {/* Nav Menu for smaller screens */}
            <NavMenu />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Constants.PAGES.map((page) => (
                <Button
                  key={page.path}
                  onClick={() => navigate(page.path)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>

            {/* Cart Icon */}
            <IconButton color="inherit" onClick={() => toggleCartDrawer(true)}>
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {/* User Menu */}
            <UserMenu
              user={user}
              anchorElUser={anchorElUser}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          </Toolbar>
        </Container>
      </AppBarMui>
      <Cart isCartOpen={isCartOpen} toggleCart={toggleCartDrawer} />
    </>
  );
};

export default AppBar;
