import { Grid } from '@mui/material'
import React, { FC } from 'react'

import { NoteTitle, NoteCategory, DeleteNote } from './components'

export const WriteNote: FC = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item xs={11}>
        <NoteTitle />
      </Grid>
      <Grid item xs={1}>
        <DeleteNote />
      </Grid>
      <NoteCategory />
    </Grid>
  )
}

export * from './providers/EditNote'
