import React, { FC } from 'react'
import { Grid, styled, colors } from '@mui/material'
import { useLocation, Link, matchPath } from 'react-router-dom'
import { convertMsToTime } from '@caldwell619/ms'
import diffInMs from 'date-fns/differenceInMilliseconds'

import { Routes } from '@/router/routes'
import { Note as INote } from '@/utils/localStorage'

export const Note: FC<INote> = ({ title, id, updatedAt }) => {
  const loc = useLocation()
  const pathMatch = matchPath<{ id?: string }>(loc.pathname, { path: Routes.WriteNote })
  const activeId = pathMatch?.params.id

  return (
    <Link to={`${Routes.WriteNoteBase}/${id}`}>
      <Container container item xs={12} isActive={id === activeId} spacing={0}>
        <Grid item xs={3}>
          <div>{getDate(updatedAt)}</div>
        </Grid>
        <Grid container item xs={9}>
          <Grid item xs={12}>
            <PostTitle>{title}</PostTitle>
          </Grid>
          <Grid item xs={12}>
            <Category>#work</Category>
            <Description>Description</Description>
          </Grid>
        </Grid>
      </Container>
    </Link>
  )
}

const getDate = (stringDate?: string): string => {
  try {
    const date = new Date(stringDate || '')
    const differenceInMs = diffInMs(new Date(), date)
    return convertMsToTime(differenceInMs) || '-'
  } catch (e) {
    return ''
  }
}

interface ContainerProps {
  isActive: boolean
}
const Container = styled(Grid, { shouldForwardProp: prop => prop !== 'isActive' })<ContainerProps>`
  padding: 10px;
  margin: 5px 0;
  ${({ isActive, theme: { palette } }) =>
    isActive
      ? `
  background-color: ${palette.background.default};
  border-left: 1px solid red;
  `
      : `
  border-left: 1px solid transparent;`}
`

const PostTitle = styled('h3')`
  margin: 0;
`
const Category = styled('p')`
  margin: 0;
  font-size: 0.9em;
  color: ${({ theme: { palette } }) => palette.primary.main};
`
const Description = styled('p')`
  margin: 0;
  color: ${colors.grey[400]};
`
