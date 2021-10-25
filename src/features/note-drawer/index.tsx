import React, { FC } from 'react'
import { Grid } from '@mui/material'
import { useRecoilValue } from 'recoil'

import { NoteSearch, Note } from './components'
import { notesAtom } from '@/store'

export const NoteDrawer: FC = () => {
  const allNotes = useRecoilValue(notesAtom)
  return (
    <Grid
      container
      spacing={0}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5px' }}
    >
      <NoteSearch />
      <Grid container spacing={0}>
        {allNotes.map(note => (
          <Note key={note.id} {...note} />
        ))}
      </Grid>
    </Grid>
  )
}
