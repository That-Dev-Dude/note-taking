import React, { FC, useContext, useEffect } from 'react'
import { styled } from '@mui/material'
import { useInput } from '@caldwell619/react-hooks'
import { useRecoilValue } from 'recoil'

import { notesAtom } from '@/store'
import { EditNote } from '@/features/write-note/providers/EditNote'

export const NoteCategory: FC = () => {
  const notes = useRecoilValue(notesAtom)
  const { updateCategory, id } = useContext(EditNote)
  const note = notes[id]
  const [localCategory, localCategoryBind, { setValue }] = useInput(note.category)

  useEffect(() => {
    setValue(note.category)
  }, [note, setValue])

  useEffect(() => {
    updateCategory(localCategory)
  }, [localCategory, updateCategory])

  return (
    <div>
      <TitleInput {...localCategoryBind} />
    </div>
  )
}

const TitleInput = styled('input')`
  outline: none;
  border: none;
  padding: 10px;
  font-size: 1.4em;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  color: ${({ theme: { palette } }) => palette.primary.main};
`
