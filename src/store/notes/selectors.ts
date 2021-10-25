import { selector } from 'recoil'

import { Note, notesKey } from '@/utils/localStorage'
import { notesAtom } from './atoms'
import { RecoilKeys } from '../keys'

export const notesToLocalStorageSelector = selector<Record<string, Note>>({
  key: RecoilKeys.NotesLocalStorageSelector,
  get({ get }) {
    return get(notesAtom)
  },
  set: ({ set }, notes) => {
    localStorage.setItem(notesKey, JSON.stringify(notes))
    set(notesAtom, notes)
  }
})

export const notesArraySelector = selector<Note[]>({
  key: RecoilKeys.NotesArray,
  get({ get }) {
    const notes = Object.values(get(notesAtom))
    return notes.sort((a, b) => {
      if (!a.updatedAt || !b.updatedAt) return -1
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })
  }
})

// const createKeyByNotes = (notesArray: Note[] | DefaultValue): Record<string, Note> => {
//   if (!Array.isArray(notesArray)) return {}
//   return notesArray.reduce<Record<string, Note>>((total, note) => ({ ...total, [note.id]: note }), {})
// }
