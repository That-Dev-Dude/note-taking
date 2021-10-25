import React, { FC, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Routes } from './routes'

const CreateNote = lazy(() => import('@/pages/Create'))
const WriteNote = lazy(() => import('@/pages/Write'))

const Router: FC = () => (
  <Suspense fallback={<span />}>
    <Switch>
      <Route path={Routes.WriteNote} component={WriteNote} />
      <Route path={Routes.CreateNote} component={CreateNote} />
    </Switch>
  </Suspense>
)

export default Router
