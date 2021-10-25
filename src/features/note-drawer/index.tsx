import React, { FC, useMemo } from 'react'
import { Grid } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { useInput } from '@caldwell619/react-hooks'
import Fuse from 'fuse.js'

import { notesArraySelector } from '@/store'
import { handleSearchResults } from '@/utils'
import { NoteSearch, Note } from './components'

export const NoteDrawer: FC = () => {
  const [searchTerm, searchTermBind] = useInput('')
  const allNotes = useRecoilValue(notesArraySelector)
  const NotesSearch = useMemo(
    () => new Fuse(allNotes, { keys: ['title', 'content', 'category', 'tags'], includeScore: true }),
    [allNotes]
  )
  const searchedNotes = handleSearchResults(NotesSearch, searchTerm, allNotes)
  return (
    <Grid
      container
      spacing={0}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5px' }}
    >
      <NoteSearch searchTermBind={searchTermBind} />
      {/* TODO: Make scroll-able */}
      <Grid container spacing={0} sx={{ transition: 'all 0.2s' }}>
        {searchedNotes.map(note => (
          <Note key={note.id} {...note} />
        ))}
      </Grid>
    </Grid>
  )
}
