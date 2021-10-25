import React, { FC, useContext } from 'react'
import { IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'

import { EditNote } from '@/features/write-note/providers/EditNote'

export const DeleteNote: FC = () => {
  const { deleteNote } = useContext(EditNote)

  return (
    <IconButton onClick={deleteNote}>
      <Delete color='error' />
    </IconButton>
  )
}
