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
}

export const getAllNotes = () => {
  let allNotesString = localStorage.getItem(notesKey)
  if (!allNotesString) allNotesString = '[]'
  const allNotes = JSON.parse(allNotesString) as Note[]
  console.log('allNotes', allNotes)
  return allNotes
}

export const writeNoteToLocalStorage = (): string => {
  const allNotes = getAllNotes()
  const newNote: Note = {
    id: uuid(),
    createdAt: new Date().toLocaleDateString(),
    updatedAt: new Date().toLocaleDateString(),
    title: 'A lovely note',
    content: '',
    tags: []
  }
  localStorage.setItem(notesKey, JSON.stringify([...allNotes, newNote]))
  return newNote.id
}

export const updateNote = (note: Note) => {
  const { id: targetNoteId } = note
  const allNotes = getAllNotes()
  const targetedUpdateNoteIndex = allNotes.findIndex(({ id: existingId }) => existingId === targetNoteId)
  if (targetedUpdateNoteIndex < 0) throw new Error('[Fatal] Cannot find note ' + targetNoteId)
  note.createdAt = new Date().toLocaleDateString()
  note.updatedAt = new Date().toLocaleDateString()
  allNotes[targetedUpdateNoteIndex] = note
  localStorage.setItem(notesKey, JSON.stringify(allNotes))
}

export const getNote = (id?: string): Note | undefined => {
  const allNotes = getAllNotes()
  return allNotes.find(({ id: existingId }) => existingId === id)
}
