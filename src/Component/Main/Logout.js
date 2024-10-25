import React from 'react';
import { Link } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

class Logout extends React.Component{
  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(){
    this.setState({
      token: localStorage.clear()
    })
  }

  render(){
    return (
      <div>
        <ListItem button="true">
          <ListItemIcon>
          <Link to='/' onClick={this.logout}>
            <PowerSettingsNewIcon />
            </Link>
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </div>
    );
  }
}


export default (Logout);
