import React, { FC } from 'react'
import { AppBar, Toolbar, Drawer } from '@mui/material'

import DarkModeToggle from './DarkModeToggle'

export const Header: FC = ({ children }) => {
  return (
    <>
      <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
        <Toolbar variant='dense'>
          <DarkModeToggle />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', paddingTop: '65px' }
        }}
      >
        {children}
      </Drawer>
    </>
  )
}

const drawerWidth = 240
