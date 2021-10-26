import React, { FC, useEffect, useContext } from 'react'
import { styled, useTheme } from '@mui/material'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon'
import { useRecoilValue } from 'recoil'

import { notesAtom } from '@/store'
import { EditNote } from '@/features/write-note/providers/EditNote'

export const NoteContent: FC = () => {
  const notes = useRecoilValue(notesAtom)
  const { updateContent, id } = useContext(EditNote)
  const note = notes[id]
  const {
    palette: { primary }
  } = useTheme()

  useEffect(() => {
    injectEditorStyle(primary.main)
  }, [primary])

  return (
    <EditorWrapper>
      {/* This is.. odd. The way the editor library works forces this behavior. 
      Otherwise all editors will bind themselves to the first note to mount */}
      {Object.values(notes).map(allNote =>
        note.id === allNote.id ? (
          <CKEditor
            key={allNote.id}
            id={allNote.id}
            editor={ClassicEditor}
            config={{
              //@ts-ignore
              placeholder: 'Write something profound. No pressure.'
            }}
            data={allNote.content}
            onChange={(_, editor) => {
              console.log('running')
              const data = editor.getData()
              updateContent(data)
            }}
          />
        ) : null
      )}
    </EditorWrapper>
  )
}

const injectEditorStyle = (backgroundColor: string) => {
  const style = `
    :root {
    --ck-color-toolbar-background: ${backgroundColor} !important;
    --ck-color-text: white !important;
    }
  `
  const styleTag = document.createElement('style')
  styleTag.innerHTML = style
  document.head.appendChild(styleTag)
}

const EditorWrapper = styled('div')``
