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
  const {
    1: localCategoryBind,
    2: { setValue }
  } = useInput(note.category, updateCategory)

  useEffect(() => {
    setValue(note.category)
  }, [note, setValue])

  return (
    <div>
      <CategoryInput {...localCategoryBind} />
    </div>
  )
}

const CategoryInput = styled('input')`
  width: 100%;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 1.4em;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  color: ${({ theme: { palette } }) => palette.primary.main};
`
