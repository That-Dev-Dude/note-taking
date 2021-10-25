import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'

import { writeNoteToLocalStorage } from '@/utils/localStorage'
import { Routes } from '@/router/routes'

const Create: FC = () => {
  const id = writeNoteToLocalStorage()
  return <Redirect to={`${Routes.WriteNote}/${id}`} />
}

export default Create
