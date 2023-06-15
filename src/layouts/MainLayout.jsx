import React from "react";
import { Drawer, Typography } from "@mui/material";
const drawerWidth = 240;

const styles = {
  drawer: {
    width: drawerWidth,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      }
  },
  root: {
    display : 'flex'
  }
};

function MainLayout({ children }) {
  return (
    <div style={styles.root}>
      <Drawer sx={styles.drawer} variant="permanent" anchor="left">
        <Typography variant="h5">Pokedex</Typography>
      </Drawer>
    <div>
      {children}
      </div>
    </div>
  );
}

export default MainLayout;
