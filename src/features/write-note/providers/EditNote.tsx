import React, { FC, createContext, useCallback } from 'react'
import { Redirect, useParams } from 'react-router-dom'

import { getNote, updateNote } from '@/utils/localStorage'
import { Routes } from '@/router/routes'

import { Note } from '@/utils/localStorage'

export const EditNote = createContext<IEditNote>({} as IEditNote)

export const EditNoteProvider: FC = ({ children }) => {
  const { id } = useParams<{ id: string }>()
  const note = getNote(id)

  const updateTitle = useCallback(
    (title: string) => {
      if (!note) return
      updateNote({ ...note, title })
    },
    [note]
  )

  const updateTags = useCallback(
    (tags: string[]) => {
      if (!note) return
      updateNote({ ...note, tags })
    },
    [note]
  )

  const updateContent = useCallback(
    (content: string) => {
      if (!note) return
      updateNote({ ...note, content })
    },
    [note]
  )

  if (!note) return <Redirect to={Routes.Home} />

  return <EditNote.Provider value={{ note, updateTitle, updateTags, updateContent }}>{children}</EditNote.Provider>
}

interface IEditNote {
  note: Note
  updateTitle: (title: string) => void
  updateTags: (tags: string[]) => void
  updateContent: (tags: string) => void
}
