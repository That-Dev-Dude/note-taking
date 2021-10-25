import React, { FC } from 'react'
import { Grid, IconButton, TextField } from '@mui/material'
import { Launch } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

import { notesToLocalStorageSelector } from '@/store'
import { createNote } from '@/utils/localStorage'
import { Routes } from '@/router/routes'
import { UseInputBind } from '@caldwell619/react-hooks'

export const NoteSearch: FC<Props> = ({ searchTermBind }) => {
  const { push } = useHistory()
  const setNotes = useSetRecoilState(notesToLocalStorageSelector)

  const handleCreateNote = () => {
    const newNote = createNote()
    setNotes(notes => ({ ...notes, [newNote.id]: newNote }))
    // This is a hack, TODO: Find a better way to wait for state update
    setTimeout(() => {
      push(`${Routes.WriteNoteBase}/${newNote.id}`)
    }, 10)
  }

  return (
    <>
      <Grid item xs={10}>
        <TextField sx={{ paddingLeft: '3px' }} fullWidth label='Search Notes' size='small' {...searchTermBind} />
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={handleCreateNote}>
          <Launch />
        </IconButton>
      </Grid>
    </>
  )
}

interface Props {
  searchTermBind: UseInputBind
}
