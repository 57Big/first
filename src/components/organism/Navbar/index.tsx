import React from "react";
import { Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import Logo from "src/assets/image/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next';
export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleCloseNavMenu();
    setAge(language)
  };

  const navList = [
    {
      title: "conventor",
      href: "conventor"
    },
    {
      title: "product",
      href: "product"
    },
    {
      title: "about",
      href: "about"
    },
    {
      title: "contact",
      href: "contact"
    },

  ]
  const languages = ["en", "ru"]
  const [age, setAge] = React.useState('en');

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div id="navbar">
      <div className="navbar_box">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { sm: 'block' } }}>
            <img src={Logo} alt="" className="logo" />
          </Box>

          <div id="language">
            <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
              {navList.map((item) => (
                <Button key={item.title} sx={{ color: '#fff' }}>
                  <Link to={item.href} duration={500} smooth={true}>
                    {t(item.title)}
                  </Link>
                </Button>
              ))}

              <Button sx={{ color: '#fff', }} onClick={handleOpenNavMenu}>{t(age)}
                <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
              </Button>

              <Menu
                id="menu-appbar "
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

              >
                {languages.map((language) => (
                  <MenuItem key={language} onClick={() => { changeLanguage(language) }}  >

                    <Typography textAlign="center">{t(language)}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>

          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                display: { xs: 'block', md: 'none' }
              }}
            >
              {navList.map((page) => (
                <Link to={page.href} duration={500} smooth={true} key={page.title} onClick={handleCloseNavMenu}>
                  <MenuItem  >
                    <Typography textAlign="center">{t(page.title)}</Typography>
                  </MenuItem>
                </Link>
              ))}

            </Menu>
          </Box>
        </Toolbar >
      </div>
    </div >
  );
};
