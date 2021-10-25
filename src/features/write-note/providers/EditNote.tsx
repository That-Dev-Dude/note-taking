import React, { FC, createContext, useCallback } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { debounce } from 'lodash'

import { updateNote } from '@/utils/localStorage'
import { Routes } from '@/router/routes'

import { Note } from '@/utils/localStorage'
import { notesToLocalStorageSelector } from '@/store'

export const EditNote = createContext<IEditNote>({} as IEditNote)

export const EditNoteProvider: FC = ({ children }) => {
  const { id } = useParams<{ id: string }>()
  const [notes, setNotes] = useRecoilState(notesToLocalStorageSelector)
  const note = notes[id]

  const updateTitle = useCallback(
    (title: string) => {
      setNotes(currentNotes => handleUpdateNote(currentNotes, id, 'title', title))
    },
    [id, setNotes]
  )

  // TODO: Fix array comparison
  const updateTags = useCallback(
    (tags: string[]) => {
      setNotes(currentNotes => handleUpdateNote(currentNotes, id, 'tags', tags))
    },
    [id, setNotes]
  )

  const updateContent = useCallback(
    (content: string) => {
      setNotes(currentNotes => handleUpdateNote(currentNotes, id, 'content', content))
    },
    [id, setNotes]
  )

  const updateCategory = useCallback(
    (category: string) => {
      setNotes(currentNotes => handleUpdateNote(currentNotes, id, 'category', category))
    },
    [id, setNotes]
  )

  const deleteNote = useCallback(() => {
    setNotes(currentNotes => {
      const mutableNotes = { ...currentNotes }
      delete mutableNotes[id]
      return mutableNotes
    })
  }, [id, setNotes])

  if (!note) return <Redirect to={Routes.Home} />

  return (
    <EditNote.Provider
      value={{
        id,
        updateTitle: debounce(updateTitle, 1000),
        updateTags: debounce(updateTags, 1000),
        updateContent: debounce(updateContent, 1000),
        updateCategory: debounce(updateCategory, 1000),
        deleteNote
      }}
    >
      {children}
    </EditNote.Provider>
  )
}

const handleUpdateNote = (
  currentNotes: Record<string, Note>,
  id: string,
  updateKey: keyof Note,
  newValue: string | string[]
) => {
  console.log('updating', updateKey)
  const targetNote = currentNotes[id]
  if (targetNote[updateKey] === newValue) return currentNotes
  const updatedNote = updateNote({ ...targetNote, [updateKey]: newValue })
  return { ...currentNotes, [id]: updatedNote }
}

interface IEditNote {
  id: string
  updateTitle: (title: string) => void
  updateTags: (tags: string[]) => void
  updateContent: (content: string) => void
  updateCategory: (category: string) => void
  deleteNote: () => void
}
