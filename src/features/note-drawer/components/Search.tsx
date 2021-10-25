import React, { FC } from 'react'
import { Grid, IconButton, TextField } from '@mui/material'
import { Launch } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { Routes } from '@/router/routes'

export const NoteSearch: FC = () => {
  return (
    <>
      <Grid item xs={10}>
        <TextField sx={{ paddingLeft: '3px' }} fullWidth label='Search Notes' size='small' />
      </Grid>
      <Grid item xs={2}>
        <Link to={Routes.CreateNote}>
          <IconButton>
            <Launch />
          </IconButton>
        </Link>
      </Grid>
    </>
  )
}
