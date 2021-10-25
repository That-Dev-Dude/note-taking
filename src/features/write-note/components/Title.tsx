import React, { FC, useContext, useEffect } from 'react'
import { styled } from '@mui/material'
import { useInput } from '@caldwell619/react-hooks'
import { useRecoilValue } from 'recoil'

import { notesAtom } from '@/store'
import { EditNote } from '@/features/write-note/providers/EditNote'

export const NoteTitle: FC = () => {
  const notes = useRecoilValue(notesAtom)
  const { updateTitle, id } = useContext(EditNote)
  const note = notes[id]
  const [title, localTitleBind, { setValue }] = useInput(note.title)

  useEffect(() => {
    setValue(note.title)
  }, [note, setValue])

  useEffect(() => {
    updateTitle(title)
  }, [title, updateTitle])

  return <TitleInput {...localTitleBind} />
}

const TitleInput = styled('input')`
  width: 100%;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 2em;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  color: ${({ theme: { palette } }) => palette.text.primary};
`
