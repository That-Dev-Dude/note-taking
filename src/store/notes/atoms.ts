import { atom } from 'recoil'

import { RecoilKeys } from '@/store/keys'
import { Note, getAllNotes } from '@/utils/localStorage'

export const notesAtom = atom<Record<string, Note>>({
  key: RecoilKeys.Notes,
  default: getAllNotes()
})
