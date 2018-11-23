import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  withRouter,
  //   Redirect,
} from "react-router-dom";
import { Wrapper } from 'atoms'

import { connect } from "react-redux";
import CmsPage from './cms'
import MainPage from './main'


const Pages = () => (
  <Wrapper width='100%' >
    <Switch>
      <Route path="/cms" component={CmsPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Wrapper>
)

export default (Pages)