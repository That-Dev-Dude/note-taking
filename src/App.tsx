import React, { FC, Suspense } from 'react'
import { styled } from '@mui/material'
import { RecoilRoot } from 'recoil'

import { Header } from '@/components'
import Router from '@/router'
import { NoteDrawer } from '@/features/note-drawer'

const App: FC = () => {
  return (
    <RecoilRoot>
      <Root>
        <Header>
          <NoteDrawer />
        </Header>
        <Suspense fallback={<span />}>
          <Router />
        </Suspense>
      </Root>
    </RecoilRoot>
  )
}

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  padding-top: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.text.primary};
  }
`
// ck-color-panel-background

export default App
