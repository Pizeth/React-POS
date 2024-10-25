import React from 'react';
import { Link } from 'react-router-dom';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsIcon from '@mui/icons-material/Settings';

import { ListItem, ListItemIcon,
         ListItemText, Divider } from '@mui/material';

import AddProduct from '../Page/AddProduct';
import AddCategory from '../Page/AddCategory';
import Logout from './Logout';
export const mainListItems = (
  <div>
    <ListItem button="true" component={ Link } to="/dashboard/product">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>

    <ListItem button="true" component={ Link } to="/dashboard/report">
      <ListItemIcon>
        <InsertChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>

    <AddProduct />
    <AddCategory />

    <Divider /> <br />

    <ListItem button="true" component={ Link } to="/dashboard/adminproduct">
      <ListItemIcon>
        <DataUsageIcon />
      </ListItemIcon>
      <ListItemText primary="Product Data" />
    </ListItem>

    <ListItem button="true" component={ Link } to="/dashboard/admincategory">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Category Data" />
    </ListItem>
    <Logout />
  </div>
);
