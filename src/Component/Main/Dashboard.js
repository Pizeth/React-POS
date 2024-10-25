import clsx from 'clsx';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import {
  CssBaseline, Drawer, AppBar, Toolbar, List, Typography, Divider,
  IconButton, Link
} from '@mui/material';

import { mainListItems } from './ListMenu';
import { useStyles } from '../Style/StyleDashboard';

import Order from '../Main/Order';
import Report from '../Main/Report';
import Product from '../Main/Product';
import Category from '../Main/Category';
import Introduction from '../Content/Introduction';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Easy Point of Sale System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [token] = useState(localStorage.getItem("jwt"))
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift, classes.appbarcolor)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            MADE EASY WITH POS SYSTEM
          </Typography>
          <IconButton color="inherit">
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      {/* Content */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className="dashboard-panel-container">
          <Routes>
            <Route path='/dashboard' element={!token ? <Navigate to="/" /> : (<Introduction />)} />
            <Route path='/dashboard/product' element={!token ? <Navigate to="/" /> : (<Order />)} />
            <Route path='/dashboard/report' element={!token ? <Navigate to="/" /> : (<Report />)} />
            <Route path='/dashboard/adminproduct' element={!token ? <Navigate to="/" /> : (<Product />)}/>
            <Route path='/dashboard/admincategory' element= {!token ? <Navigate to="/" /> : (<Category />)}/>
          </Routes>
        </div>
        <Copyright />
      </main>
    </div>
  );
}

export default App;
