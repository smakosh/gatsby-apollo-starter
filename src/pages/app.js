import React from 'react'
import { Router } from '@reach/router'
import NotFound from 'components/common/NotFound'
import Launches from 'components/app/Launches'

export default () => (
  <Router>
    <Launches path="/app/" component={Launches} />
    <NotFound default component={NotFound} />
  </Router>
)
