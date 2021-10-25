import { Grid } from '@mui/material'
import React, { FC } from 'react'

import { NoteTitle, NoteCategory, DeleteNote, NoteContent } from './components'

export const WriteNote: FC = () => {
  return (
    <Grid container justifyContent='space-between' alignItems='center'>
      <Grid item xs={11}>
        <NoteTitle />
      </Grid>
      <Grid item xs={1}>
        <DeleteNote />
      </Grid>
      <Grid item xs={12}>
        <NoteCategory />
      </Grid>
      <Grid item xs={12}>
        <NoteContent />
      </Grid>
    </Grid>
  )
}

export * from './providers/EditNote'
