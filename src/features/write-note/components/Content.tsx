import React, { FC, useContext, useEffect } from 'react'
import { styled } from '@mui/material'
import { useInput } from '@caldwell619/react-hooks'
import { useRecoilValue } from 'recoil'

import { notesAtom } from '@/store'
import { EditNote } from '@/features/write-note/providers/EditNote'

export const NoteContent: FC = () => {
  const notes = useRecoilValue(notesAtom)
  const { updateContent, id } = useContext(EditNote)
  const note = notes[id]
  const [localContent, localContentBind, { setValue }] = useInput(note.content)

  useEffect(() => {
    setValue(note.content)
  }, [note, setValue])

  useEffect(() => {
    updateContent(localContent)
  }, [localContent, updateContent])

  return (
    <div>
      <ContentInput {...localContentBind} />
    </div>
  )
}

const ContentInput = styled('textarea')`
  width: 95%;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 1.4em;
  background-color: ${({ theme: { palette } }) => palette.background.default};
  color: ${({ theme: { palette } }) => palette.text.primary};
`
