import { v4 as uuid } from 'uuid'

export const notesKey = 'rgl-notes'

export interface NoteCreationPayload {
  id: string
  createdAt?: string
  updatedAt?: string
}
export interface Note extends NoteCreationPayload {
  id: string
  title: string
  content: string
  tags: string[]
  category: string
}

export const getAllNotes = () => {
  let allNotesString = localStorage.getItem(notesKey)
  if (!allNotesString) allNotesString = '{}'
  const allNotes = JSON.parse(allNotesString) as Record<string, Note>
  return allNotes
}

export const createNote = (): Note => ({
  id: uuid(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  title: 'A lovely note',
  content: '',
  category: '#',
  tags: []
})

export const updateNote = (note: Note) => {
  const mutableNote = { ...note }
  mutableNote.createdAt = new Date().toISOString()
  mutableNote.updatedAt = new Date().toISOString()
  return mutableNote
}
