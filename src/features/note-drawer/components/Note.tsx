import React, { FC } from 'react'
import { Grid, styled, colors } from '@mui/material'
import { useLocation, Link, matchPath } from 'react-router-dom'
import { convertMsToTime } from '@caldwell619/ms'
import diffInMs from 'date-fns/differenceInMilliseconds'

import { Routes } from '@/router/routes'
import { Note as INote } from '@/utils/localStorage'

export const Note: FC<INote> = ({ title, id, updatedAt, category, content }) => {
  const { pathname } = useLocation()
  const pathMatch = matchPath<{ id?: string }>(pathname, { path: Routes.WriteNote })
  const activeId = pathMatch?.params.id

  return (
    <Link to={`${Routes.WriteNoteBase}/${id}`} style={{ width: '100%' }}>
      <Container container isActive={id === activeId} spacing={0} justifyContent='flex-start'>
        <Grid item xs={3}>
          <div>{getDate(updatedAt)}</div>
        </Grid>
        <Grid container item xs={9}>
          <Grid item xs={12}>
            <PostTitle>{title}</PostTitle>
          </Grid>
          <Grid item xs={12}>
            <Category>{category}</Category>
            <Description
              dangerouslySetInnerHTML={{ __html: `${content.substr(0, 40)}${content.length >= 40 ? '..' : ''}` }}
            />
          </Grid>
        </Grid>
      </Container>
    </Link>
  )
}

const getDate = (stringDate?: string): string => {
  try {
    const date = new Date(stringDate || '')
    // I never want to show MS, so add 1000 ms to it, so it's always above 1s
    const differenceInMs = diffInMs(new Date(), date) + 1000
    return convertMsToTime(differenceInMs) || '-'
  } catch (e) {
    return ''
  }
}

interface ContainerProps {
  isActive: boolean
}
const Container = styled(Grid, { shouldForwardProp: prop => prop !== 'isActive' })<ContainerProps>`
  padding: 5px 8px 20px 8px;
  margin-top: 5px;
  ${({ isActive, theme: { palette } }) =>
    isActive
      ? `
  background-color: ${palette.mode === 'dark' ? colors.grey[800] : colors.grey[300]};
  border-left: 4px solid ${palette.primary.main};
  `
      : `
  border-left: 4px solid transparent;`}
`

const PostTitle = styled('h3')`
  margin: 0;
`
const Category = styled('p')`
  margin: 0;
  font-size: 0.9em;
  color: ${({ theme: { palette } }) => palette.primary.main};
`
const Description = styled('div')`
  color: ${colors.grey[400]};
  font-size: 0.9em;
  height: 40px;
  & p {
    margin: 0;
  }
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  overflow: hidden;
`
