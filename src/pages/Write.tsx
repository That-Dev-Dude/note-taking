import React, { FC } from 'react'

import { WriteNote, EditNoteProvider } from '@/features/write-note'

const Write: FC = () => {
  return (
    <EditNoteProvider>
      <WriteNote />
    </EditNoteProvider>
  )
}

export default Write
