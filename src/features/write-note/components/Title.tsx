import React, { FC, useContext, useEffect } from 'react'
import { styled } from '@mui/material'
import { useInput, useDebounce } from '@caldwell619/react-hooks'

import { EditNote } from '@/features/write-note/providers/EditNote'

export const NoteTitle: FC = () => {
  const { note, updateTitle } = useContext(EditNote)
  const [localTitle, localTitleBind] = useInput(note.title)
  const debouncedTitle = useDebounce(localTitle, 700)

  useEffect(() => {
    updateTitle(debouncedTitle)
  }, [updateTitle, debouncedTitle])

  return (
    <div>
      <TitleInput {...localTitleBind} />
    </div>
  )
}

const TitleInput = styled('input')`
  outline: none;
  border: none;
  padding: 10px;
  font-size: 2em;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  color: ${({ theme: { palette } }) => palette.text.primary};
`
