import React, { FC, useEffect, useContext } from 'react'
import { colors, styled, useTheme, Theme } from '@mui/material'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-balloon'
import { useRecoilValue } from 'recoil'

import { notesAtom } from '@/store'
import { EditNote } from '@/features/write-note/providers/EditNote'

const NoteContent: FC = () => {
  const notes = useRecoilValue(notesAtom)
  const { updateContent, id } = useContext(EditNote)
  const note = notes[id]
  const theme = useTheme()

  useEffect(() => {
    injectEditorStyle(theme)
  }, [theme])

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

const injectEditorStyle = ({ palette }: Theme) => {
  const style = `
    :root {
    --ck-color-toolbar-background: ${palette.primary.main} !important;
    --ck-color-text: white !important;
    --ck-color-button-default-background: ${palette.primary.main} !important;
    --ck-color-button-default-hover-background: ${colors.grey[600]} !important;
    --ck-color-button-on-background: ${colors.grey[900]} !important;
    --ck-color-button-on-hover-background: ${colors.grey[600]} !important;
    --ck-color-button-on-active-background: ${palette.background.default} !important;
    --ck-color-base-active: ${palette.background.default} !important;
    }
  `
  const styleTag = document.createElement('style')
  styleTag.innerHTML = style
  document.head.appendChild(styleTag)
}

const EditorWrapper = styled('div')``

// For lazy loading
export default NoteContent
