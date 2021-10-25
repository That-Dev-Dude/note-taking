import React, { FC, Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Routes } from './routes'

const WriteNote = lazy(() => import('@/pages/Write'))

const Router: FC = () => (
  <Suspense fallback={<span />}>
    <Switch>
      <Route path={Routes.WriteNote} component={WriteNote} />
    </Switch>
  </Suspense>
)

export default Router
