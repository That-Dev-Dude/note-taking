declare module '@ckeditor/ckeditor5-react' {
  import { editor, EditorConfig } from '@ckeditor/ckeditor5-core'
  import { ReactElement } from 'react'

  type Editor = editor.Editor
  type DataApi = editor.utils.DataApi

  interface CKEEditorProps {
    editor: Editor
    data?: string
    config?: EditorConfig
    id?: string
    disabled?: boolean
    placeholder?: string
    onReady?: (event: any, editor: editor.Editor) => void
    onChange?: (event: any, editor: editor.Editor & DataApi) => void
    onBlur?: (event: any, editor: editor.Editor) => void
    onFocus?: (event: any, editor: editor.Editor) => void
    onError?: (error: Error, details: { willEditorRestart: boolean; phase: 'initialization' | 'runtime' }) => void
  }

  const CKEditor: (props: CKEEditorProps) => ReactElement

  export { CKEditor }
}
