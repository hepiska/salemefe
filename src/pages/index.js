import React from "react"
import {
  Switch,
  Route,
  BrowserRouter as Router,

} from "react-router-dom"
import { Wrapper } from 'atoms'

import CmsPage from './cms'
import MainPage from './main'
import DetailPage from './main/detail'


const Pages = () => (
  <Wrapper width='100%'>
    <Switch>
      <Route path="/cms" component={CmsPage} />
      <Route path="/:id" component={DetailPage} />
      <Route path="/" component={MainPage} />

    </Switch>
  </Wrapper>
)

export default (Pages)
